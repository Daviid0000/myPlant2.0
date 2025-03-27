import jwt from "jsonwebtoken";
import { environments } from "../src/config/environments";

const authToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token) {
        return res.status(403).json({ message: "Token Not Found"})
    }

    try {
        const decoded = jwt.verify(token, environments.secret_key);
        req.user = decoded;
        
        next();
    } catch (error) {
        return res.status(401).json({ mesage: "Token invalido" })
    }
}

export default authToken;