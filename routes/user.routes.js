import { Router } from "express";
import { allUser, getUser, loginUser, logoutUser, userCreate } from "../controller/user.js";
import { checkAuth } from "../middleware/auth.js";

const route = Router();

// route.get("/" , (req, res) =>{
//     return res.json({
//         massage  : "this is User Routes"
//     })
// })


route.route("/").get( allUser);
route.route("/").post(userCreate);
route.route("/").put(loginUser);
route.route("/current").get(getUser);
// route.route("/logout").get( checkAuth , logoutUser);
route.route("/logout").get(  logoutUser);






export default route;