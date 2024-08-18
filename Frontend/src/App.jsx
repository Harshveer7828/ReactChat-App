import Login from './assets/pages/login/Login'
import SignUp from './assets/pages/signup/SignUp'
import Home from './assets/pages/home/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Login/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
