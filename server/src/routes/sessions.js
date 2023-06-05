import express from "express";

import { SessionModel } from "../models/journey/Sessions.js";
import { CampaignModel } from "../models/journey/Campaigns.js";

const router = express.Router();

// get All Sessions
router.get("/", async (req, res) => {
    try {
        const sessions = SessionModel.find({});

        res.json(sessions);
    } catch (err) {
        console.info("ERROR when fetching all Sessions: ", err);
    }
});

// get Session by ID
router.get("/:id", async (req, res) => {
    try {
        const session = SessionModel.findById({ _id: req.params.id });

        res.json(session);
    } catch (err) {
        console.info("ERROR when fetching Session by ID: ", err);
    }
});

// get All Sessions of Campaign by CampaignID
router.get("/campaign/:id", async (req, res) => {
    try {
        const sessionsByCampaignID = CampaignModel.find({
            campaignOwner: req.params.id,
        });

        res.json(sessionsByCampaignID);
    } catch (err) {
        console.info("ERROR when fethcing Sessions by CampaignID: ", err);
    }
});

// create new Session
router.post("/create", async (req, res) => {
    try {
        const newSession = new SessionModel(req.body.session);
        const campaignOwner = await CampaignModel.findById(req.body.campaignID);

        const savedSession = await newSession.save();
        campaignOwner.sessions.push(savedSession);

        await campaignOwner.save();

        res.json(savedSession);
    } catch (err) {
        console.info("ERROR when creating new Session: ", err);
    }
});

// update Session with ID
router.put("/update/:id", async (req, res) => {
    try {
        const update = req.body;
        const updatedSession = await SessionModel.updateOne(
            { _id: req.params.id },
            update
        );

        res.json(updatedSession);
    } catch (err) {
        console.info("ERROR when updating Sessiont with ID: ", err);
    }
});

// delete Session with ID
router.delete("/", async (req, res) => {
    try {
        const sessionID = req.body.sessionID;
        const campaignID = req.body.campaignID;

        const campaignOwner = await UserModel.findById(campaignID);

        await campaignOwner.sessions.pull({ _id: sessionID });
        await campaignOwner.save();

        await SessionModel.deleteOne({ _id: sessionID });

        res.json({
            message: "Session Deleted Successfully!",
        });
    } catch (err) {
        console.info("ERROR when deleting Session with ID: ", err);
    }
});

export { router as sessionRouter };
