import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies[process.env.JWT_TOKEN];
        if (!token) {
            return res.status(401).json({
                message: "User not Authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                message: "User not Authenticated",
                success: false,
            })
        }
        req.id = decode.userId;
        next();
    } catch {
        console.log(error);
    }
}

export default isAuthenticated;