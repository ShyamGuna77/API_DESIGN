import express, { urlencoded } from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors'
import * as dotenv from "dotenv";
import { protect } from './modules/auth';
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))



// Basic route
app.use('/api',protect, router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




