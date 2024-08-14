export const signIn = async (req, res, next) => {
    try {
        const {fullname,username,email,password,confirmPassword,gender} = req.body
    } catch (error) {
        
    }
    
}
export const login = (req, res, next) => {
    res.send("login route");
}
export const logout = (req, res, next) => {
    res.send("logout route");
}