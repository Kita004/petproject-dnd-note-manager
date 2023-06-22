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
            {
                name: { type: String, required: true },
                level: {
                    type: Number,
                    min: [1, "Value is Beneath the Limit!!"],
                    max: [20, "Value Exceeds the Limit!!"],
                    required: true,
                },
                class: { type: String, required: true },
                subClass: String,
                race: { type: String, required: true },
                comments: [String],
            },
        ],

        sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
    },
    { timestamps: true }
);

export const CampaignModel = mongoose.model("Campaign", CampaignSchema);
