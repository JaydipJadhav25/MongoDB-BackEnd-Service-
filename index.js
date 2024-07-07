import express from "express"
import { main } from "./db/index.js";
import userRouter from "./routes/user.routes.js"
// import {cors} from "cors"
import bodyParser from "body-parser";
import helmet from "helmet"
import cors from "cors"
import cookieparser from "cookie-parser"
const app = express();

app.use(express.json());
// app.use(cors())
// app.use(bodyParser())
app.use(helmet())

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'http://localhost:3000'],
        scriptSrc: ["'self'", 'http://localhost:3000'],
        connectSrc: ["'self'", 'http://localhost:3000'],
        // Add other directives as needed
      },
    })
  );

  app.use(cors({
    origin : "*",
    //origin access anywhere because set * all access
    Credential : true

}))

app.use(cookieparser());

main()  
.then((data) => console.log("DATABASE Connection successfully.." ,))
.catch(err => console.log(err));

app.get("/" , (req , res) =>{
    return res.json({
        massage : "done"
    })
})

app.use("/user" , userRouter);

app.listen(3000 , ()=>console.log("server running at port : 3000"))
