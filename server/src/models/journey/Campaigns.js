import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,

        my_character: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PlayableCharacter",
        },
        party: [
            { type: mongoose.Schema.Types.ObjectId, ref: "PlayableCharacter" },
        ],

        notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
        sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
    },
    { timestamps: true }
);

export const CampaignModel = mongoose.model("Campaign", CampaignSchema);
