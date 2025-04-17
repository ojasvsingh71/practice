import mongoose from "mongoose"
import secret from "../secret.js"

export default async function connectDB() {
    await mongoose.connect(secret.bu_base).then(() => {
        console.log("Connected to MongoDB\n");
    })
}