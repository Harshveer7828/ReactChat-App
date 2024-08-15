import express from "express";

const router = express.Router();
import { login, logout, signIn } from "../controllers/auth.controller.js";

router.post("/sign-up",signIn )

router.post("/login",login )

router.post("/logout",logout )



export default router;