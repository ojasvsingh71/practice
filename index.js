import express from "express"
import secret from "./secret.js"
import connectDB from "./lib/connectBD.js"
import authRoute from "./routes/auth.route.js"

const app = express();

app.use(express.json());

connectDB();

app.use("/auth", authRoute);

app.get('/', (req, res) => {
    res.send("Hello BU.....\n");
})

app.listen(secret.PORT, (req, res) => {
    console.log(`\nServer is running on http://localhost:${secret.PORT}\n`);
})