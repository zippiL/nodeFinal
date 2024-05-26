import mongoose from 'mongoose';

const ClicksSchema = new mongoose.Schema({
    ipAddress: String,
    insertedAt: Date
})

const ClicksModel = mongoose.model("clicks", ClicksSchema);
export default ClicksModel;