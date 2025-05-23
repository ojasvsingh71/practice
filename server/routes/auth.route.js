import express from "express"
import authControl from "../controller/auth.controller.js"
import authMiddleWare from "../middleware/auth.middleware.js";
import { body } from "express-validator"

const route = express.Router();

route.post("/register", [
    body("username").trim().escape(),
    body("password").trim(),
    body("gender").trim().escape(),
    body("age").isNumeric()
], authControl.register);
route.post("/login", authControl.login);
route.get("/Userdashboard", authMiddleWare("user", "admin"), (req, res) => {
    res.status(200).json({
        message: `Welcome User ${req.bu.username}, this is your dashboard.`,
        user: req.bu
    })
});
route.get("/Admindashboard", authMiddleWare("admin"), (req, res) => {
    res.status(200).json({
        message: `Welcome Admin ${req.bu.username}, this is your dashboard.`,
        user: req.bu
    })
})
route.post("/refresh", authControl.refresh);
route.post("/logout", authControl.logout);

export default route;