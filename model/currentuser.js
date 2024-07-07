import mongoose , {Schema} from "mongoose"

const currentUserSchema = new mongoose.Schema({
    user :{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const CurrentUser = mongoose.model("CurrentUser" , currentUserSchema)