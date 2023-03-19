// import product from '../modals/product.modal.js';
// import cloudinary from '../utils/cloudinary.js';
// import account from '../modals/account.modal.js';

// export const getListProduct = async (req, res) => {
//     try {
//         const listProduct = await product.find();
//         return res.status(200).json(listProduct)
//     }
//     catch(err) {
//         return res.status(500).json({err: err})
//     }
// }

// export const newProduct = async (req, res) => {
//     const image = req.body.img
//     const userId = req.userId
//     try {
//         const poster = await account.findById(userId)
//         const arr = []
//         for(let i = 0; i< image.length; i++){
//             arr.push(
//                await cloudinary.v2.uploader.upload(image[i], {
//                     folder: 'postImage',
//                     crop: 'scale'
//                 }).then(resual => resual.secure_url)
//             )
//         }
//         const edided = {
//             userId: userId,
//             poster: {
//                 fullName: poster.fullName,
//                 phone:poster.phone,
//                 avatar: poster.avatar.url,
//                 userId:userId
//             },
//             type: req.body.type,
//             title: req.body.title,
//             description: req.body.description,
//             address: req.body.address,
//             information: req.body.information,
//             img:  arr,
//         }
//         const createPost = new post(edided)
//         await createPost.save()
//         return res.status(200).json('Create new product is Success')
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// }

// // Hàm tìm kiếm bằng từ khoá
// export const getListFromSearchKey = async (req,res) => {
//     const searchKey = req.params.searchKey
//     try {
//         const list = await post.find({$or: [ {title: new RegExp(searchKey, 'i')} , {type: new RegExp(searchKey, 'i') }]})
//         return res.status(200).json(list)
//     } catch (error) {
//         return res.status(500).json(error)       
//     }
// }
