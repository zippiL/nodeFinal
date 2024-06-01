import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Urls');
    console.log("Mongo connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

main().catch(err => console.log(err));

export default main;



// import mongoose from "mongoose";



// const uriLocal = "mongodb://localhost:27017/Urls";

// const connectDB = async () => {
//   await mongoose.connect(uriLocal);
// };
// const database = mongoose.connection;

// database.on('error', (error) => {
//   console.log(error);
// })

// database.once('connected', () => {
//   console.log('Database Connected');
// })

// export default connectDB;
