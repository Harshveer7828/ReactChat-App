import express from "express";
import { login, logout, signIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-in",signIn )

router.post("/login",login )

router.post("/logout",logout )



export default router;