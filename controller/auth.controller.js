import buu from "../models/bu.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const register = async (req, res) => {
    const { username, password, age, gender } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await buu.create({
        username: username,
        password: hashedPassword,
        age: age,
        gender: gender
    })

    res.status(200).json({
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
    } 

    const isPassMatch = await bcrypt.compare(password, bu.password);

    if (!isPassMatch || gender !== bu.gender) {
        res.status(401).json({
            message: "Incorrect password :( or :]"
        })
    } else {
        const token = jwt.sign(
            { id: bu._id, username: bu.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Found bu :)",
            token,
            user: {
                id: bu._id,
                username: bu.username,
                age: bu.age
            }
        });
    }
}

export default { login, register };