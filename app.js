const express=require("express")
const cors=require ("cors")
const mongoose=require("mongoose")
const productRouter=require("./controllers/productRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://thapasya:9846@cluster0.w7irtzy.mongodb.net/proDb?retryWrites=true&w=majority",
{useNewUrlParser:true})


app.use("/api/product",productRouter)

app.listen(3003,()=>{
    console.log("Server Running")
})