import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000


app.get("/", (req, res, next) => {

    res.send("server is running");
});

app.use("/api/auth", authRoute);



app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});