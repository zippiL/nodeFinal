import mongoose from 'mongoose';

const LinksSchema = new mongoose.Schema({
    originalUrl:String
})

const LinksModel = mongoose.model("categories", LinksSchema);
export default LinksModel;