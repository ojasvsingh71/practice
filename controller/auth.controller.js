import buu from "../models/bu.model.js"

const register = async (req, res) => {
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
}

const login = async (req, res) => {
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
}

export default { login, register };