import Login from './assets/pages/login/Login'
import SignUp from './assets/pages/signup/SignUp'
import Home from './assets/pages/home/Home.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';
function App() {

  const {authUser} = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to="/login"/>}/>
        <Route path="/sign-up" element={authUser ? <Navigate to='/' /> : <SignUp/>}/>
        <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/logout" element={<Login/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
