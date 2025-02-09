const mongoose= require('mongoose')

const menuItemSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    price:{
        type:Number,
        required:true
    },
    teste:{
        type:String,
        enum:['sweet', 'spicy', 'sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        // [String] that means we are expecting array of strings 
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const MenuItem= mongoose.model('MenuItem', menuItemSchema)
module.exports= MenuItem