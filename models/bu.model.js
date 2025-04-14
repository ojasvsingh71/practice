import mongoose from "mongoose"

const Bu = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    }
})

export default mongoose.model("Buu", Bu);