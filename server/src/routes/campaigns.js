import express from "express";
import mongoose from "mongoose";

import { CampaignModel } from "../models/journey/Campaigns.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

// get all Campaigns
router.get("/", async (req, res) => {
    try {
        const campaigns = await CampaignModel.find({});
        res.json(campaigns);
    } catch (err) {
        console.info("ERROR when fetching all campaigns: ", err);
    }
});

// get Campaign by ID
router.get("/:id", async (req, res) => {
    try {
        const campaign = CampaignModel.findById({ _id: req.params.id });

        res.json(campaign);
    } catch (err) {
        console.info(
            `ERROR when finding Campaign with ID ${req.params.id}:`,
            err
        );
    }
});

// create New Campaign
router.post("/create", async (req, res) => {
    try {
        const newCampaign = new CampaignModel(req.body.campaign);
        const userOwner = await UserModel.findById(req.body.userID);

        const savedCampaign = await newCampaign.save();
        userOwner.campaigns.push(savedCampaign);

        await userOwner.save();

        res.json(response);
    } catch (err) {
        console.info("ERROR when creating New Campaign: ", err);
    }
});

// update Campaign, is it needed tho?
router.put("/update/:id", async (req, res) => {
    try {
        const campaignToUpdate = req.body;
        const updatedCampaign = await CampaignModel.updateOne(
            { _id: req.params.id },
            campaignToUpdate
        );

        res.json(updatedCampaign);
    } catch (err) {
        console.info("ERROR when updating Campaign: ", err);
    }
});

router.delete("/delete/:campaign_id", async (req, res) => {
    try {
    } catch (err) {
        console.info(
            `ERROR when deleting Campaign with ID ${req.params.id}: `,
            err
        );
    }
});

export { router as campaignRouter };
