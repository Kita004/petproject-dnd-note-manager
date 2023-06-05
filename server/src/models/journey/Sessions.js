import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    timestamps: { createdAt: true, updatedAt: false },

    title: String,
    events: [String],
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "notes" }],

    campaignOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "campaigns",
        required: true,
    },
});

export const SessionModel = mongoose.model("sessions", SessionSchema);
