import express from "express";
const account = express.Router()
import { getAccount, login, register ,getUserLogin} from '../controllers/account.controller.js'
import { isAuth} from '../Middeware/AuthMidderware.js'


account.get('/', getAccount)
account.post('/login', login)
account.post('/', register)
account.post('/me',isAuth, getUserLogin)

export default account