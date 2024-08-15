import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import genratedTokenAndSetCookie from "../utils/generatedToken.js";

export const signIn = async (req, res, next) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User with this username already exist's" });
        }

        // HASH THE PASSWORDS
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password, salt)

        // https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${user}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${user}`;

        const newUser = new User({
            fullName,
            username,
            gender,
            password: hasedPassword,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            genratedTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                password: newUser.password,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            });


        } else {
            res.status(400).json({ message: "Invalid User Creation" });
            console.log("error in creating the new user");

        }

    } catch (error) {
        console.log("error in sign up controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}
export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = bcrypt.compare(password, user?.password);
        if (!user || !isPasswordCorrect) {
            res.status(400).json({ message: "Invalid Login Credentials" });
        }
        genratedTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            gender: user.gender,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export const logout = (req, res, next) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "logout successfully" });
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}