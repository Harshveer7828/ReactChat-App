import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers =await User.find({ _id: { $ne: loggedInUserId } }); // not include $ne
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("error in the get user controller",filteredUsers);
        res.status(500).json({message:error.message});
    }

}