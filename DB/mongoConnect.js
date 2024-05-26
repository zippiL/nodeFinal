// import mongoose from 'mongoose';

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/Urls', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//   console.log("Mongo connected");
// }

// main().catch(err => console.log(err));

// export default main;

import mongoose from "mongoose";

// Replace the uri string with your connection string.
const uri =
"mongodb+srv://<username>:<password>@<host>/<dbname>?retryWrites=true&w=majority";
const uriLocal = "mongodb://localhost:27017/Urls";

const connectDB = async () => {
  await mongoose.connect(uriLocal);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

export default connectDB;
