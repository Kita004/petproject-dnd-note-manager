import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../Models/Users.js";
import { createSecretToken } from "../Utils/SecretToken.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await UserModel.findOne({ username });

        // check if user already exists
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const user = await UserModel.create({ username, password });
        const token = createSecretToken(user._id);
        res.cookie("token_boi", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(201).json({
            message: "User registered in Successfully!",
            success: true,
            user,
        });
    } catch (error) {
        console.error("ERROR when registering user: ", error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // check if all field are given
        if (!username || !password) {
            return res.json({ message: "All fields are required" });
        }
        const user = await UserModel.findOne({ username });

        // check if user exists
        if (!user) {
            return res.json({ message: "Incorrect password or username" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // check if pw is correct
        if (!isPasswordValid) {
            return res.json({ message: "Incorrect password or username" });
        }

        const token = createSecretToken(user._id);
        res.cookie("token_boi", token, {
            withCredentials: true,
        });

        res.status(201).json({
            message: "User logged in successfully",
            success: true,
            token: token,
        });
    } catch (error) {
        console.error("ERROR when logging in user: ", error);
    }
});

export { router as userRouter };
