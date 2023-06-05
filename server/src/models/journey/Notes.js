import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["npc", "item", "place", "misc"],
            default: "misc",
        },

        title: { type: String, required: true },
        comments: [String],

        sessionOwner: { type: mongoose.Schema.Types.ObjectId, ref: "sessions" },
        campaignOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "campaigns",
        },
    },
    { timestamps: { updatedAt: false } }
);

export const NoteModel = mongoose.model("notes", NoteSchema);
