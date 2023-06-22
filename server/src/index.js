import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { userRouter } from "./Routes/users.js";
import { campaignRouter } from "./Routes/campaigns.js";
import { sessionRouter } from "./Routes/sessions.js";
import { userVerification } from "./Middlewares/security.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 60000,
        },
    })
);

mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => console.info("MongoDB is connected!"))
    .catch((err) => console.info("ERROR when connecting to mongoDB", err));

app.use("/api/users", userRouter);
app.use("/api/campaigns", campaignRouter);
app.use("/api/sessions", sessionRouter);

app.get("/", userVerification, (req, res) => {
    res.send("Hello Home!");
});

app.get("*", function (req, res) {
    res.send("Sorry, this is an invalid URL.");
});

app.listen(3001, () => console.info("SERVER STARTED!"));
