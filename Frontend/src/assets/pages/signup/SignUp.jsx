import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../../hooks/useSignup.js';


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: ""
  });
  
  const {loading,signup} = useSignup();

  const sumbitHandler = async (e) => {

    e.preventDefault();
    
    await signup(inputs);
  }


  return <>
    <div className="container h-screen w-screen bg-[#24253C] flex items-center justify-center px-2 flex-col">
      <div className="left w-[50%] h-[30%] flex items-center justify-center">
        <img className='h-[100%] w-[80%] lg:w-[30%]' src="/Chat App.png" alt="" />
      </div>
      <div className="formContainer h-[60%] w-[98%] lg:h-[50%] lg:w-[30%]">
        <h1 className='text-white text-3xl font-bold'>Sign Up</h1>
        <form className='mt-6' onSubmit={sumbitHandler}>
          <div className='flex gap-2'>
            <label className="input input-bordered input-secondary flex items-center  rounded-full">
              <h1 className="fa-solid fa-user" />
              <input
                type="text"
                placeholder="Full Name"
                className="input input-ghostinput w-full max-w-xs border-none"
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}

              />
            </label>
            <label className="input input-bordered input-secondary flex items-center  rounded-full">
              <h1 className="fa-solid fa-user" />
              <input
                type="text"
                placeholder="Username"
                className="input input-ghostinput w-full max-w-xs border-none"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </label>
          </div>
          <div className='mt-3'>
            <label className="input input-bordered input-secondary flex items-center rounded-full">
              <h1 className="fa-solid fa-lock" />
              <input
                type="text"
                placeholder="Password"
                className="input input-ghostinput w-full max-w-xs border-none"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
              <span className='cursor-pointer text-white'>Show</span>
            </label>
          </div>
          <div className='mt-3'>
            <label className="input input-bordered input-secondary flex items-center rounded-full">
              <h1 className="fa-solid fa-lock" />
              <input
                type="text"
                placeholder="Confirm Password"
                className="input input-ghostinput w-full max-w-xs border-none"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </label>
          </div>
          <div className='mt-3'>
            <label className="input input-bordered input-secondary flex items-center rounded-full">
              <h1 className="fa-solid fa-envelope" />
              <input
                type="email"
                placeholder="Email"
                className="input input-ghostinput w-full max-w-xs border-none"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              />
            </label>
          </div>
          <div className='flex gap-2'>
            <label className="cursor-pointer label flex gap-2">
              <span className="label-text">Male</span>
              <input type="checkbox" className="checkbox checkbox-error checked:bg-emerald-500" value="male" name='gender' onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} checked={inputs.gender === "male" ? true : false} />
            </label>
            <label className="cursor-pointer label flex gap-2">
              <span className="label-text">Female</span>
              <input type="checkbox" className="checkbox checkbox-error" value="female" name='gender' onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} checked={inputs.gender === "female" ? true : false} />
            </label>
          </div>
          <button className="btn btn-error mt-2 w-full text-white text-lg rounded-full">Log In</button>

          <h3 className='text-white mt-3 text-center'>Don't Have An Account ? <Link to="/login" className="link link-hover text-red-400">Login</Link></h3>
        </form>
      </div>
    </div>
  </>
}

export default SignUp