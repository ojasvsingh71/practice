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
        message:"Registered Bu...",
        user
    })
})

app.get('/', (req, res) => {
    res.send("Hello BU.....\n");
})

app.listen(PORT, (req, res) => {
    console.log(`\nServer is running on http://localhost:${PORT}\n`);
})