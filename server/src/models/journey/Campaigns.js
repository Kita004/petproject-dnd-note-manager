import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,

        myCharacter: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "my_characters",
        },
        party: [{ type: mongoose.Schema.Types.ObjectId, ref: "party_members" }],

        sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "sessions" }],
        // notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "notes" }],
        // userOwner: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
    { timestamps: true }
);

export const CampaignModel = mongoose.model("campaigns", CampaignSchema);
