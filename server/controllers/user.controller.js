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

export const logout = async(req,res) => {
    try {
        return res.status(200).cookie(process.env.JWT_TOKEN,"",{maxAge:0}).json({
            message : "Logged out successfully",
            success : true,
        });
    } catch (error) {
        console.log("Error at Logging Out:" + error);
        return res.status(500).json({
            success : false,
            message : "Failed to logout",
        })
    }
}


export const getUserProfile = async(req,res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).json({
                message: "Profile not found",
                success : false,
            })
        }
        return res.status(200).json({
            success : true,
            user,
        })
    } catch (error) {
        console.log("Error at Loading User:" + error);
        return res.status(500).json({
            success : false,
            message : "Failed to Load User",
        })
    }
}