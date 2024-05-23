import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Ensure the correct import statement
import './style.css';
import HomePage from './pages/HomePage';
import Authenticate from './pages/Authenticate';
import EnrollMentForm from './pages/EnrollMentForm';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
        navigate("/homepage");
      }else{
        navigate("/")
      }
  }, [isLoggedIn])
  
  return (
      <Routes>
        <Route path="/" element={<Authenticate setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}/>
        <Route path="/homepage" element={<HomePage onLogout={() => setIsLoggedIn(false)} />}/>
        <Route path="/enroll" element={<EnrollMentForm/>}/>
      </Routes>
  );
}
export default App;