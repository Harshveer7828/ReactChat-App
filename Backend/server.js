import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000

app.listen(5000, () => {
    console.log(`server running on PORT ${PORT}`);
});

app.get("/", (req, res, next) => {
    // this is the test route
    res.send("server is running");
});
