import mongoose from 'mongoose';

const ClicksSchema = new mongoose.Schema({
    ipAddress: String,
    insertedAt: Date,
    targetParamValue:String
});
const targetsSchema = new mongoose.Schema({
    value: String,
    name: String
});
const LinksSchema = new mongoose.Schema({
    originalUrl: String,
    clicks: [ClicksSchema] ,
    targetParamName:String,
    targetValues:[targetsSchema]
});

const LinksModel = mongoose.model("Links", LinksSchema);
export default LinksModel;
