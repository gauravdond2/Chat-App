import express from 'express';
import router from './routes/auth.routes.js';
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js';
dotenv.config();



const app = express();
app.use("/",router );

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:'+ PORT);
  connectDB();
  
}); 