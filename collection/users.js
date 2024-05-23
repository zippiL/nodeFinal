import mongoose from 'mongoose';
import LinksModel from './links';
const UsersSchema = new mongoose.Schema({
    name: String,
      email: String,
      password: String,
      links: [LinksModel] 
})

const UsersModel = mongoose.model("categories", UsersSchema);
export default UsersModel;