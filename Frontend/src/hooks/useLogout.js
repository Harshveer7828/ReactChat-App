import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
  cosnt [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const logout = async ()=>{
    setLoading(true);
    try {
        const res = fetch("/api/auth/logout",{
            method: "POST",
            headers:{"content-type": "application/json"}
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem("chat-user");
        setAuthUser(null);
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }
}

export default useLogout