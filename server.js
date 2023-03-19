import express from "express";
import cors from 'cors';
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()
import account from "./routers/account.router.js";
// import product from "./routers/product.router.js";
const app = express()

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.snqpcmm.mongodb.net/?retryWrites=true&w=majority`

const port = process.env['PORT'] || 8000
app.use(cors())
app.use(express.json())
// app.use('/api/product',product)
app.use('/api/account', account)
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log('MongoDB connection established...')
    app.listen(port)
})
.catch(err => {
    console.log(err)
})
