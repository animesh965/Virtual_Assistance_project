import express from 'express';

import dotenv from 'dotenv';
import connectionDB from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; 

app.get('/', (req, res) => {
    res.send('Hello jarvis');
}
)

app.listen(port, () => {
    connectionDB()
    console.log(`🎁 Server is running on port ${port}`);
}   
)