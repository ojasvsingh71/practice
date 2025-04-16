import express from "express"
import PORT from "./port.js"
import connectDB from "./lib/connectBD.js"
import buu from "./models/bu.model.js"

const app = express();

app.use(express.json());

connectDB();

app.post("/register", async (req, res) => {
    const { username, password, age, gender } = req.body;

    const user = await buu.create({
        username: username,
        password: password,
        age: age,
        gender: gender
    })

    res.status(201).json({
        message: "Registered Bu...",
        user
    })
})

app.post("/login", async (req, res) => {
    const { username, password, gender } = req.body;

    const bu = await buu.findOne({ username });

    if (!bu) {
        res.status(404).json({
            message: "Cannot find bu :("
        })
    } else if (password !== bu.password || gender !== bu.gender) {
        res.status(401).json({
            message: "Incorrect password :( or :]"
        })
    } else res.status(201).json({
        message: "Found bu :)",
        bu,
    })
})

app.get('/', (req, res) => {
    res.send("Hello BU.....\n");
})

app.listen(PORT, (req, res) => {
    console.log(`\nServer is running on http://localhost:${PORT}\n`);
})