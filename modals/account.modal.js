import mongoose from "mongoose";
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    }

}, 
{
    timestamps: true
})
const account = mongoose.model('user', schema)
export default account