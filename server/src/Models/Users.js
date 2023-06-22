import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Your username is required"],
        unique: true,
    },
    password: { type: String, required: [true, "Your password is required"] },
    campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
});

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

export const UserModel = mongoose.model("User", UserSchema);
