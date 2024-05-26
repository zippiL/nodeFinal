import mongoose from 'mongoose';
import ClicksModel from './clicks.js';

const LinksSchema = new mongoose.Schema({
    originalUrl:String,
    clicks: [ClicksModel]
})

const LinksModel = mongoose.model("links", LinksSchema);
export default LinksModel;