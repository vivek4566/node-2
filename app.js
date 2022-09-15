
const express=require("express")
const mongoose=require("mongoose")
const app=express()
mongoose.connect("mongodb+srv://vivek566:vivekananda@cluster0.mjeupdx.mongodb.net/?retryWrites=true&w=majority")
app.get("/CreateUser",(req,res)=>{
    res.json({message:"Hello"})
})
app.use(express.json())
app.use("/User",require("./routes/first"))
 app.listen(8080,()=>{
    console.log("running.....")
 })   
