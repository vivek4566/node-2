const mongoose=require("mongoose")
let user=mongoose.Schema({
    name:({
        type:"string"
    })
})
module.exports=mongoose.model("Users",user)