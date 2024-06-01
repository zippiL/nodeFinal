import mongoose from 'mongoose';
const UsersSchema = new mongoose.Schema({
    name: String,
      email: String,
      password: String,
      links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }]
})

const UsersModel = mongoose.model("users", UsersSchema);
export default UsersModel;