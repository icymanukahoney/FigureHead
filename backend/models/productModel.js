const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    //define the rules for the data
    //key : dataType, required: true - only add required if you want to enforce the value
    _id: {
        type: ObjectID,
        required: true
    },
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
        type:Int32,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    categories: [{
        category: {
            type: String,
            required: true
        }
    }],
    comments: [{
        comment: {
            type: ObjectId, 
            required: true
        }
    }], 
    image: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model('Product', productSchema)