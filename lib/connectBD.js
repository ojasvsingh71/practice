import mongoose from "mongoose"

export default async function connectDB() {
    await mongoose.connect(process.env.bu_base).then(() => {
        console.log("Connected to MongoDB\n");
    })
}