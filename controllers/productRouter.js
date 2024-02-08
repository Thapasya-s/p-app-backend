const express=require("express")
const router=express.Router()
const productModel=require("../models/productmodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let product=new productModel(data)
    let result=await product.save()
    res.json({
        status:"success"
    })
    })
    
    router.get("/viewall",async(req,res)=>{
        let data=await productModel.find()
        res.json(data)
    })
    
    



module.exports=router