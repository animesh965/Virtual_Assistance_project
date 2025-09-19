import express from 'express';
import cookieParser from "cookie-parser"
import dotenv from 'dotenv';
import connectionDB from './config/db.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; 
app.use(express.json())
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('Hello jarvis');
}
)
app.use("/api/auth", authRouter)
app.listen(port, () => {
    connectionDB()
    console.log(`🎁 Server is running on port ${port}`);
}   
)