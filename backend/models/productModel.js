const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    //define the rules for the data
    //key : dataType, required: true - only add required if you want to enforce the value
    
    author: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    price: {
        type:Number,
        required: true
    },
    categories: [{
        type: String, 
        required: true
    }],
    user_id: {
        type: String,
        required: true
    }
    //comments: [{
        //type: Schema.Types.ObjectId,
        //ref: 'Comment' 
    //}],
    //image: {
       // type: String,
        //required: true
   // }

}, {timestamps: true})
module.exports = mongoose.model('Product', productSchema)
