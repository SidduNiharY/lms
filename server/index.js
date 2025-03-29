import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/db.js';
import userRoute from "./routes/user.route.js"
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config({});

connectDB();

const app = express();

//default middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:8080",
    Credentials : true,
}));


app.use("/api/v1/user" , userRoute);


app.listen(process.env.PORT , () => {
    console.log("Server is running on: " + process.env.PORT);
})

