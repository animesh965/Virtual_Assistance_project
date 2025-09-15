import mongoose from "mongoose";

const connectionDB = async () =>{
    try {
       await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       });
       console.log("👀 Database connected successfully"); 
    } catch (error) {
        console.log("🤔 Error in DB connection", error);
    }
}

export default connectionDB;