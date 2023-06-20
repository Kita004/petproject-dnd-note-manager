import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
    {
        title: String,
        events: [String],
        notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
    },
    { timestamps: { updatedAt: false } }
);

export const SessionModel = mongoose.model("Session", SessionSchema);
