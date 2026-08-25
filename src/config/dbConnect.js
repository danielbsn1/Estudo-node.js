import mongoose from "mongoose";

function connectDB() {
    
mongoose.connect("mongodb+srv://danielbsneto9_db_user:WaO5eCtw4tT0xq1s@cluster0.l1784wx.mongodb.net/Livraria?appName=Cluster0");

return mongoose.connection;
};

export default connectDB;


