import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const signup = async ({ fullName, username, password, confirmPassword, gender, email }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender, email });
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/sign-up", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender, email })
            })

            const data = await res.json();
            console.log(data);
            if(data.error){
                throw new Error(data.error);
            }

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }


    }
    return { loading, signup }
}

export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender, email }) {
    if (!fullName || !username || !password || !confirmPassword || !gender || !email) {
        toast.error("please fill in all the fields");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("please check the confirm password");
        return false;
    }
    if (password.length < 6) {
        toast.error("password length must be at least 6");
        return false;
    }

    return true;
}