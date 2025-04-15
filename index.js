import express from "express"
import PORT from "./port.js"
import connectDB from "./lib/connectBD.js"
import buu from "./models/bu.model.js"

const app = express();

app.use(express.json());

connectDB();

app.post("/register", async (req, res) => {
    const { username, password, age } = req.body;

    const user = await buu.create({
        username: username,
        password: password,
        age: age
    })

    res.status(201).json({
        message: "Registered Bu...",
        user
    })
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const bu = await buu.findOne({ username });

    if (!bu) {
        res.status(404).json({
            message: "Cannot find bu :("
        })
    } else if (password !== bu.password) {
        res.status(401).json({
            message: "Incorrect password :("
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