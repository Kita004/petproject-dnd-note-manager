import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
    {
        title: String,
        events: [String],
        notes: [
            {
                type: {
                    type: String,
                    enum: ["npc", "item", "place", "basic"],
                    default: "basic",
                },

                title: { type: String, required: true },
                comments: [String],
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    { timestamps: { updatedAt: false } }
);

export const SessionModel = mongoose.model("Session", SessionSchema);
