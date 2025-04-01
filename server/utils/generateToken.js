import jwt from 'jsonwebtoken'

export const generateToken = (res,user,message) => {
    const {email , password , name} = user;
    const jwtToken = jwt.sign(
        {userId : user._id} , 
        process.env.SECRET_KEY);
        
    res.cookie(process.env.JWT_TOKEN, jwtToken , {maxAge: 30 * 24 * 60 * 60 * 1000 , sameSite : "strict" , secure : true , httpOnly : true});

    return res.status(200).json({
        success : true,
        message,
        user
    });
}