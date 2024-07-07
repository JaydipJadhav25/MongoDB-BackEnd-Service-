
import { CurrentUser } from "../model/currentuser.js";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken"


const superkey = "supaerman@123"

const userCreate = async( req , res) =>{
    const { name , email ,password } = req.body;
    // console.log(name , email , password);
    const user = await User.create({
        name : name,
        email : email,
        password : password,
    });

    // console.log("user : " , user);

    return res.json({
        user
    })


}

const allUser = async (req, res) =>{
    const users =  await User.find({});
    // console.log(users);
    return res.json({
        users
    })
}

const loginUser = async(req , res) =>{
    const { email , password} = req.body;
    // console.log(email  , password)
    const user = await User.findOne({
        email : email
    });

    

    if(user.password !== password)  throw new Error("password is Wrong..")
     
        const token = jwt.sign({
            _id : user._id,
            name : user.name,
            email : user.email
        } ,superkey );
        console.log(token)
        

    user.token = token;
    user.status = true;
    user.save();  
    
   const current =  await CurrentUser.create(user._id);

    console.log(current);

    return res
    .cookie("token" , token)
    .json({
    user   
     })
}



const getUser =  async(req, res) =>{
 
    // const user = req.user;
    //  const cuurentuser = await User.findById(user.id);

    const cuurentuser = await CurrentUser.find({});


    return res.json({
        cuurentuser
    })


}
const logoutUser = async(req , res) => {
    // const user = req.user

    // const logoutuser = await User.findByIdAndUpdate(
    //     user._id,
    //     {
    //         $unset: {
    //             token: 1,
    //             // this removes the field from document
    //         },
    //         status : false

    //     },
    //     {
    //         new: true
    //     }
    // )
    // console.log("logoutuser" , logoutuser)

    //second way 
const logoutuser = await CurrentUser.deleteMany({});


    return res
    .clearCookie("token")
    .json({
        logoutuser
    })
}


export {
    userCreate,
    allUser,
    loginUser,
    getUser,
    logoutUser
}