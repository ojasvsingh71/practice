import buu from "../models/bu.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { validationResult } from "express-validator"

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

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
        return res.status(404).json({
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
            { expiresIn: "1m" }
        );

        const refresh_token = jwt.sign(
            { id: bu._id, username: bu.username },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: "7d" }
        )

        res.cookie("refreshToken", refresh_token, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            message: "Found bu :)",
            token,
            user: {
                id: bu._id,
                username: bu.username,
                gender: bu.gender,
                age: bu.age
            }
        });
    }
}

const refresh = async (req, res) => {
    const token = req?.cookies?.refresh_token;
    if (!token) {
        return res.status(401).json({
            message: "No refresh token"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

        const newAcessToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            accesstoken: newAcessToken
        });
    } catch (err) {
        res.status(403).json({
            message: "Invalid refersh token"
        });
    }
}

const logout = async (req, res) => {
    res.clearCookie("refreshtoken", {
        httpOnly: true,
        secure: true,
        sameSite: "Strict"
    });

    res.status(200).json({
        message: "Logged out successfully"
    });
}

export default { login, register, refresh, logout };