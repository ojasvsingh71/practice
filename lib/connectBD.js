import mongoose from "mongoose"
import bu_base from "../mongodb.js"

export default async function connectDB() {
    await mongoose.connect(bu_base).then(() => {
        console.log("Connected to MongoDB\n");
    })
}