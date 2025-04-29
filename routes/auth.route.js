import express from "express"
import authControl from "../controller/auth.controller.js"
import authMiddleWare from "../middleware/auth.middleware.js";

const route = express.Router();

route.post("/register", authControl.register);
route.post("/login", authControl.login);
route.get("/dashboard", authMiddleWare, (req, res) => {
    res.status(200).json({
        message: `Welcome ${req.bu.username}, this is your dashboard.`,
        user: req.bu
    })
})

export default route;