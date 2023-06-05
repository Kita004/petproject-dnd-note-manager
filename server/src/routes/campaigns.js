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

// get all campaigns of User with ID
router.get("/user/:id", async (req, res) => {
    try {
        const campaignsByUserID = CampaignModel.find({
            userOwner: req.params.id,
        });

        res.json(campaignsByUserID);
    } catch (err) {
        console.linfo("ERROR when fetching all Campaigns by userID: ", err);
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

        res.json(savedCampaign);
    } catch (err) {
        console.info("ERROR when creating New Campaign: ", err);
    }
});

// update Campaign, is it needed tho?
router.put("/update/:id", async (req, res) => {
    try {
        const update = req.body;
        const updatedCampaign = await CampaignModel.updateOne(
            { _id: req.params.id },
            update
        );

        res.json(updatedCampaign);
    } catch (err) {
        console.info("ERROR when updating Campaign: ", err);
    }
});

router.delete("/", async (req, res) => {
    try {
        const campaignID = new mongoose.Types.ObjectId(req.body.campaignID);
        const userID = new mongoose.Types.ObjectId(req.body.userID);

        const userOwner = await UserModel.findById(userID);

        await userOwner.campaigns.pull({ _id: campaignID });
        await userOwner.save();

        await CampaignModel.deleteOne({ _id: campaignID });

        res.json({
            message: "Campaign Deleted Successfully!",
        });
    } catch (err) {
        console.info(
            `ERROR when deleting Campaign with ID ${req.body.campaignID}: `,
            err
        );
    }
});

export { router as campaignRouter };
