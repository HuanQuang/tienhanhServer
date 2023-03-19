import mongoose from "mongoose";
const schema = new mongoose.Schema({
title: {
    type: String,
    require:true
},
description: {
    general: {
        type: String
    },
    useOfProduct: {
        type: String
    },
    ingredient: {
        type: String
    },
    use: {
        type: String
    },
    note: {
        type: String
    }
},
category: {
    type: String,
    require: true
},
image: {
    type: Object
},
keyWord: {
    type: Array
},
trademark: {
    type: String
},
sold: {
    type: Number
},
feedback: {
    type: Object
},
price: {
    type: Number,
    require: true
},
other: {
    type: Object
}
},
{
    timestamps: true
})
const product = mongoose.model('products', schema)
export default product