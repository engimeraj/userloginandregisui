import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function HomePage({ onLogout }) {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  const handleLogoutClick = () => {
    onLogout();
    localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <div className="default-page">
      <h1 className="heading">this is home page</h1>
      <div className='login-registration'>
        <Button variant="contained" color="primary" onClick={handleEnrollClick}>Student Enroll</Button>
        <Button variant="contained" color="secondary" onClick={handleLogoutClick}>Logout</Button>
      </div>

    </div>
  );
}

export default HomePage;
