import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/generateToken.js";

export const register = async(req,res) => {
    try{
        const {name , email , password} = req.body;
        if(!name || !email || !password){
            return res.status(404).json({
                success : false , 
                message : "All Fields are required"
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(404).json({
                success : false,
                message : "Existing User",
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            name,email,password : hashedPassword,
        })
        return res.status(201).json({
            success : true,
            message : "Account Created Successfully",
        })
    }catch(error){
        console.log("Registration Error : " + error);
        res.status(404).json({
            success : false,
            message : "User not created successfully",
        })
    }
};

export const login = async (req,res) => {
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(404).json({
                success : false ,
                message : "All Fields are required",
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success : false , 
                message : "User Does not Exist",
            })
        }

        const match = await bcrypt.compare(password , user.password);
        if(match != true){
            console.log(true);
            return res.status(404).json({
                success : false,
                message : "Invalid Password",
            })
        }
        return generateToken(res,user ,`Welcome back ${user.name}`);
    }catch(error){
        console.log("Login Error : " + error);
        res.status(404).json({
            success : false ,
            message : "Failed to Login User",
        })
    }
};