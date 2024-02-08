const mongoose=require("mongoose")

const productSchema=new mongoose.Schema(
    {
        productid:String,
        productname:String,
        price:String,
        description:String
        
    }
)
module.exports=mongoose.model("product",productSchema)