import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
    timestamps: true,

    title: { type: String, required: true },
    description: String,

    myCharacter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "my_characters",
        required: true,
    },
    party: [{ type: mongoose.Schema.Types.ObjectId, ref: "party_members" }],

    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "sessions" }],
    // notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "notes" }],
});

export const CampaignModel = mongoose.model("campaigns", CampaignSchema);
