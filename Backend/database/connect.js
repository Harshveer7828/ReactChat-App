import mongoose from "mongoose";

const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connect to the database");
        
    } catch (error) {
        console.log("Error to connect with database",error.message);
    }
}

export default connectToDatabase;