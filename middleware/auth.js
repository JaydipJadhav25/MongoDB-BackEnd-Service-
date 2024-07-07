import jwt from "jsonwebtoken"

function checkAuth( req , res , next){
const token = req.cookies["token"];
console.log("token bhetl : " , token)

if(!token){
    return res.json({
        massage :  "unAutherized access.."
    })
}

const decodedUser = jwt.verify(token , "supaerman@123");
console.log(decodedUser)

req.user = decodedUser


next();
}

export { 
    checkAuth
}