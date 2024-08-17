import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return <>
    <div className="container h-screen w-screen bg-[#24253C] flex items-center justify-center px-2 flex-col">
      <div className="left w-[50%] h-[30%] flex items-center justify-center">
        <img className='h-[100%] w-[80%] lg:w-[30%]' src="/Chat App.png" alt="" />
      </div>
      <div className="formContainer h-[60%] w-[98%] lg:h-[50%] lg:w-[30%]">
        <h1 className='text-white text-3xl font-bold'>Sign Up</h1>
        <form className='mt-6'>
          <div>
            <label className="input input-bordered input-secondary flex items-center  rounded-full">
              <h1 className="fa-solid fa-user" />
              <input
                type="text"
                placeholder="Username"
                className="input input-ghostinput w-full max-w-xs border-none"
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
              />
            </label>
          </div> 
          <div className='flex gap-2'>
            <label className="cursor-pointer label flex gap-2">
              <span className="label-text">Male</span>
              <input type="checkbox" className="checkbox checkbox-error checked:bg-emerald-500"/>
            </label>
            <label className="cursor-pointer label flex gap-2">
              <span className="label-text">Female</span>
              <input type="checkbox" className="checkbox checkbox-error" />
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