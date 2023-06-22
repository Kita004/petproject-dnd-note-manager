import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js";
import { campaignRouter } from "./routes/campaigns.js";
import { sessionRouter } from "./routes/sessions.js";
import { notesRouter } from "./routes/notes.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);

app.use("/api/users", userRouter);
app.use("/api/campaigns", campaignRouter);
app.use("/api/sessions", sessionRouter);
app.use("/api/notes", notesRouter);

app.get("*", function (req, res) {
    res.send("Sorry, this is an invalid URL.");
});

app.listen(3001, () => console.info("SERVER STARTED!"));
