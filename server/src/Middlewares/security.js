import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { UserModel } from "../Models/Users.js";

dotenv.config();

export function checkLogin(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        const err = new Error("Error when logging in!!");
        next(err);
    }
}

export function userVerification(req, res, next) {
    console.log("userVerification cookies: ", req.cookies.token_boi);
    const token = req.cookies.token_boi;
    if (!token) {
        return res.json({ status: false });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false });
        } else {
            const user = await UserModel.findById(data.id);
            if (user) return res.json({ status: true, user: user.username });
            else return res.json({ status: false });
        }
    });
}
