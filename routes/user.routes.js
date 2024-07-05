import { Router } from "express";
import { allUser, loginUser, userCreate } from "../controller/user.js";

const route = Router();

// route.get("/" , (req, res) =>{
//     return res.json({
//         massage  : "this is User Routes"
//     })
// })

route.route("/").get(allUser);
route.route("/").post(userCreate);
route.route("/").put(loginUser);




export default route;