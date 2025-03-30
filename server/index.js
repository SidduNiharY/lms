import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from "./routes/user.route.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
}));

// Routes
app.use("/api/v1/user", userRoute);

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
