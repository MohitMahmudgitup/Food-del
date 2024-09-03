import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        // trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // trim: true,
        // lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    cardData: {
        type:Object,
        default:{}
    }
},{minimize:false});
const userModel = mongoose.model.user || mongoose.model('user', userSchema);
export default userModel