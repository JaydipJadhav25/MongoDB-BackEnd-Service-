import { User } from "../model/user.model.js";




const userCreate = async( req , res) =>{
    const { name , email ,password } = req.body;
    console.log(name , email , password);
    const user = await User.create({
        name : name,
        email : email,
        password : password,
    });

    console.log("user : " , user);

    return res.json({
        user
    })


}

const allUser = async (req, res) =>{
    const users =  await User.find({});
    console.log(users);
    return res.json({
        users
    })
}

const loginUser = async(req , res) =>{
    const { email , password} = req.body;
    const user = await User.findOne({
        email : email
    });

    if(user.password !== password)  throw new Error("password is Wrong..")

    return res.json({
    user   
     })
}


export {
    userCreate,
    allUser,
    loginUser
}