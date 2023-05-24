import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json({ message: "User already exists!!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
        username,
        password: hashedPassword,
    });

    await newUser.save();

    res.json({ message: "User saved successfully!" });
});
router.post("/login", async (req, res) => {
    const secretKey = process.env.SECRET_KEY;
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.json({ message: "User does not exist!!" });
    }
    try {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.json({ message: "Username or Password is Incorrect!!" });
        }

        const token = jwt.sign({ id: user._id }, secretKey);
        res.json({ token, userID: user._id });
    } catch (err) {
        console.info("ERROR when logging in User: ", err);
    }
});

export { router as userRouter };
