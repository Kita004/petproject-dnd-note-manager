import express from "express";

import { NoteModel } from "../models/journey/Notes.js";
import { SessionModel } from "../models/journey/Sessions.js";
import { CampaignModel } from "../models/journey/Campaigns.js";

const router = express.Router();

// get All Notes
router.get("/", async (req, res) => {
    try {
        const notes = await NoteModel.find({});

        res.json(notes);
    } catch (err) {
        console.info("ERROR when fetching all Notes: ", err);
    }
});

// get Note by ID
router.get("/:id", async (req, res) => {
    try {
        const notes = await NoteModel.findById({ _id: req.params.id });

        res.json(notes);
    } catch (err) {
        console.info("ERROR when fetching Note by ID: ", err);
    }
});

// get All Notes of Session by SessionID
router.get("/session/:id", async (req, res) => {
    try {
        const notesBySessionID = await SessionModel.find({
            sessionOwner: req.params.id,
        });

        res.json(notesBySessionID);
    } catch (err) {
        console.info("ERROR when fetching Notes by SessionID: ", err);
    }
});

// get All Notes of Campaign by CampaignID
router.get("/campaign/:id", async (req, res) => {
    try {
        const notesByCampaignID = await CampaignModel.find({
            campaignOwner: req.params.id,
        });

        res.json(notesByCampaignID);
    } catch (err) {
        console.info("ERROR when fetching Notes by CampaignID: ", err);
    }
});

// create new Note
router.post("/create", async (req, res) => {
    try {
        const newNote = new NoteModel(req.body);
        const sessionOwner = await SessionModel.findById(newNote.sessionOwner);
        const campaignOwner = await CampaignModel.findById(
            newNote.campaignOwner
        );

        const savedNote = await newNote.save();
        sessionOwner.notes.push(savedNote);
        await sessionOwner.save();

        campaignOwner.notes.push(savedNote);
        await campaignOwner.save();

        res.json(savedNote);
    } catch (err) {
        console.info("ERROR when creating new Note: ", err);
    }
});

// update Note with ID
router.put("/update/:id", async (req, res) => {
    try {
        const update = req.body;
        const updatedNote = await NoteModel.updateOne(
            { _id: req.params.id },
            update
        );

        res.json(updatedNote);
    } catch (err) {
        console.info("ERROR when updating Note with ID: ", err);
    }
});

// delete Note with ID
router.delete("/:id", async (req, res) => {
    try {
        const noteID = req.params.id;
        const noteToDelete = await NoteModel.findById(noteID);

        const sessionOwner = await SessionModel.findById(
            noteToDelete.sessionOwner
        );
        const campaignOwner = await CampaignModel.findById(
            noteToDelete.campaignOwner
        );

        // delete noteID from Session
        await sessionOwner.notes.pull({ _id: noteID });
        await sessionOwner.save();

        // delete noteID from Campaign
        await campaignOwner.notes.pull({ _id: noteID });
        await campaignOwner.save();

        await NoteModel.deleteOne({ _id: noteID });

        res.json({
            message: "Note Deleted Successfully!",
        });
    } catch (err) {
        console.info("ERROR when deleting Note with ID: ", err);
    }
});

export { router as notesRouter };
