import mongoose from "mongoose";

const PartyMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    subClass: String,
    race: { type: String, required: true },

    comments: [String],

    campaignOwner: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export const PartyMemberModel = mongoose.model(
    "party_members",
    PartyMemberSchema
);
