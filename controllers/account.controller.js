import  account from '../modals/account.modal.js'
import jwt from 'jsonwebtoken'

// Danh sách account
export const getAccount = async (req, res) => {
    try {
        const listAccount = await account.find();
        return res.status(200).json(listAccount)
    }
    catch(err) {
        return res.status(500).json({err: err})
    }
}

// Đăng nhập
export const login = async (req, res) => {
    try {
        const user = req.body.username
        const password = req.body.password
        const checkAccount = await account.findOne({username: user, password: password})
        if(checkAccount){
            const token = jwt.sign({
                id:checkAccount._id, 
                username:checkAccount.username, 
                role: checkAccount.role,
                time: checkAccount.createdAt
        },
                process.env['SECRET_KEY'], 
                {
                    expiresIn:3600
                })
            return res.status(200).json({
                message: 'Đăng nhập thành công',
                token: token,
               })
        } else return res.status(202).json({
            message: 'Sai tên đăng nhập hoặc mật khẩu'
        })
    }
    catch (error){
        return res.status(500).json({
            message: 'Lỗi server',
            error: error})
    }
}

// Đăng kí tài khoản mới
export const register =  async (req, res) => {
    const newAccount = req.body
    try {
        let checkAccount = await account.findOne({ username: newAccount.username})
        if(checkAccount){
            return res.status(202).json("Tài khoản đã tồn tại")
        }
        else {
            const creatAccount = new account(newAccount)
            await creatAccount.save()
            return res.status(201).json("Đăng kí thành công")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

//Check token valid 
export const getUserLogin = async (req, res) => {
    try {
        const userId = req.userId
        const user = await account.findById(userId)
        res.json({
                id:user._id, 
                username:user.username, 
                role: user.role,
                time: user.createdAt
        })
    } catch (error) {
        res.status(500).json(error)
    }
}