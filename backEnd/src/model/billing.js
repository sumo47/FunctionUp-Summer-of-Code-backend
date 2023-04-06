const mongoose=require("mongoose")
const billingSchema=new mongoose.Schema({
    customerName:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    item:{
        type:[    {
            itemName: String,
            quantity: Number,
            discountedPrice: Number,
            mrp: Number,
            value: Number
          }],
        require:true
    },
    // quantity:{
    //     type:[Number],
    //     require:true
    // },
    // discountedPrice:{
    //     type:[Number],
    //     require:true
    // },
    // MRP:{
    //     type:[Number],
    //     require:true
    // },
    // value:{
    //     type:[Number],
    //     require:true
    // },
    total:{
        type:Number,
        require:true
    },
    // GST:{
    //     type:Number,
    //     require:true
    // },
    netTotal:{
        type:Number,

    },
    paymentMethod:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model("billing",billingSchema)