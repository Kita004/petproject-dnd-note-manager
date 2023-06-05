import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
    {
        title: String,
        events: [String],
        notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "notes" }],

        campaignOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "campaigns",
            required: true,
        },
    },
    { timestamps: { updatedAt: false } }
);

export const SessionModel = mongoose.model("sessions", SessionSchema);
