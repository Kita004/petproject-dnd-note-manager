import mongoose from "mongoose";

const MyCharacterSchema = new mongoose.Schema({
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
    background: String,
    alignment: String,
    stats: [
        {
            name: { default: "STR", immutable: true },
            value: { type: Number, min: 0, max: 20 },
            required: true,
        },
        {
            name: { default: "DEX", immutable: true },
            value: { type: Number, min: 0, max: 20 },
            required: true,
        },
        {
            name: { default: "CON", immutable: true },
            value: { type: Number, min: 0, max: 20 },
            required: true,
        },
        {
            name: { default: "INT", immutable: true },
            value: { type: Number, min: 0, max: 20 },
            required: true,
        },
        {
            name: { default: "WIS", immutable: true },
            value: { type: Number, min: 0, max: 20 },
            required: true,
        },
        {
            name: { default: "CHA", immutable: true },
            value: { type: Number, min: 0, max: 20 },
            required: true,
        },
    ],
    // TODO: to be implemented
    skills: [],

    campaignOwner: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export const MyCharacterModel = mongoose.model(
    "my_characters",
    MyCharacterSchema
);
