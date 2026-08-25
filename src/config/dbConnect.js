import mongoose from "mongoose";

function connectDB() {

mongoose.connect(process.env.MONGO_URI);

return mongoose.connection;
};

export default connectDB;


