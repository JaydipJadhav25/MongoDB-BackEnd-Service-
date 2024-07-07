import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
       name :{
         type :String,
       },
       email :{
        type :String,
        require : true
       },
       password : {
        type :String,
        require : true
       },
       token : {
        type : String
       },
       status :{
        type : Boolean,
        default : false
       }
},{
    timestamps :true
})

export const User = mongoose.model("User" , userSchema);