const express=require("express")
const route=express.Router()
const firsts=require("../model")
route.post("/CreateUser",async(req,res)=>{
   try{
    const data=await firsts.create({
        ...req.body
    })
    
    res.status(200).json({message:"Create sucessfully..."})
   }
   catch(err)
   {
    res.status(400).json({message:""})
   }
})
route.get("/GetUser",async(req,res)=>{
    try{
        const data=await firsts.find()
        res.status(200).json(data)
    }
    catch(err)
    {
        res.status(400).json({message:"not succesfull.."})
    }
})
module.exports=route