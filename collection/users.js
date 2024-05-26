import mongoose from 'mongoose';
import LinksModel from "./links.js"
const UsersSchema = new mongoose.Schema({
    name: String,
      email: String,
      password: String,
      links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }]
})

const UsersModel = mongoose.model("user", UsersSchema);
export default UsersModel;