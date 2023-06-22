import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createSecretToken = (id) => {
    const expirationTime = 3 * 24 * 60 * 60; // 3 days
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: expirationTime,
    });
};
