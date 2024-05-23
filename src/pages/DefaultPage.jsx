import React from 'react';
import Button from '@mui/material/Button';
function DefaultPage({ handleOpenRegistration, handleOpenLogin }) {
    return (
      <div className='default-page'>
        <h1 className="heading">this is default page</h1>
        <div className='login-registration'>
          <Button type="submit" variant="contained" color="primary" onClick={() => handleOpenRegistration(true)}>
            Register
          </Button>
          <Button type="submit" variant="contained" color="primary" onClick={() => handleOpenLogin(true)}>
            Login
          </Button>
        </div>
      </div>
    );
  }
  export default DefaultPage;