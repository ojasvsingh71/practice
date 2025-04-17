import express from "express"
import authControl from "../controller/auth.controller.js"

const route = express.Router();

route.post("/register", authControl.register);
route.post("/login", authControl.login);

export default route;