import express from "express";
import mongoose from "mongoose";

import { CampaignModel } from "../models/journey/Campaigns.js";

const router = express.Router();

// get all Campaigns
router.get("/", async (req, res) => {
    try {
        const response = await CampaignModel.find({});
        res.json(response);
    } catch (err) {
        console.info("ERROR when fetching all campaigns: ", err);
    }
});

// create New Campaign
router.post("/create", async (req, res) => {
    try {
        const newCampaign = new CampaignModel(req.body);
        const response = await newCampaign.save();
        res.json(response);
    } catch (err) {
        console.info("ERROR when creating New Campaign: ", err);
    }
});

export { router as campaignRouter };
