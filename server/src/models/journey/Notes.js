import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    timestamps: { createdAt: true, updatedAt: false },
    type: {
        type: String,
        enum: ["npc", "item", "place", "misc"],
        default: "misc",
    },

    title: { type: String, required: true },
    comments: [String],

    sessionOwner: { type: mongoose.Schema.Types.ObjectId, ref: "sessions" },
    campaignOwner: { type: mongoose.Schema.Types.ObjectId, ref: "campaigns" },
});

export const NoteModel = mongoose.model("notes", NoteSchema);
