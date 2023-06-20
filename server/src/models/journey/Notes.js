import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["npc", "item", "place", "basic"],
            default: "basic",
        },

        title: { type: String, required: true },
        comments: [String],
    },
    { timestamps: { updatedAt: false } }
);

export const NoteModel = mongoose.model("Note", NoteSchema);
