import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js"
import connectToDatabase from "./database/connect.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/userRoute.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json()); // to pass incomming request with JSON payload (req.body)
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/user", userRoute);

// app.get("/", (req, res, next) => {
//     res.send("server is running");
// });


app.listen(PORT, () => {
    connectToDatabase();
    console.log(`server running on PORT ${PORT}`);
});