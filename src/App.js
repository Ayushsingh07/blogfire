import './App.css';
import { BrowserRouter as Router,Routes , Route , Link } from "react-router-dom";
import  Home from "./pages/Home";
import  Post from "./pages/Post";
import  Login from "./pages/Login";
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './firebase';




function App() {
  
  const [isAuth, setIsAuth ]= useState(localStorage.getItem("isAuth"));
  const signoutuser =()=>{
      signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname ="/login"
      })
  }

  return (
  <Router>
    <nav>
      <Link to="/"> Home</Link>
      {!isAuth ?  (<  Link to="/login"> login</Link>):(
      <>
      <Link to="/post"> post</Link>
      <button onClick={signoutuser}> logout</button>
      </>
       )}


    
      
    </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} />} />
      <Route path="/post" element={<Post isAuth={isAuth}/>} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
    </Routes>
  </Router>
  );
}

export default App;
