import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Ensure the correct import statement
import { emailfield, namefield, passwordfield } from '../ReusableFieldsForForm/reusableFields'
import ReusableModalWindow from '../UserLoginAndRegist/ReusableModalWindow'
import DefaultPage from './DefaultPage';

const Authenticate = ({setIsLoggedIn, isLoggedIn}) => {
const [openRegistration, setOpenRegistration] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
const navigate = useNavigate();
  const registrationFields = [
    { ...namefield('name', 'Full Name') },
    { ...emailfield('email', 'Email') },
    { ...passwordfield('password', 'Password') }
  ];

  const loginFields = [
    { ...emailfield('email', 'Email') },
    { ...passwordfield('password', 'Password') }
  ];

  const handleOpenRegistration = (value) => {
    setOpenRegistration(value);
  };

  const handleOpenLogin = (value) => {
    setOpenLogin(value);
  };

  const handleLogin = (val) => {
    setIsLoggedIn(val);
    setOpenLogin(false);  // Close login modal on successful login
    navigate("/homepage");
  };

  return (
    <>
                <DefaultPage
                  handleOpenRegistration={handleOpenRegistration}
                  handleOpenLogin={handleOpenLogin}
                />
                {openRegistration && (
                  <ReusableModalWindow
                    open={openRegistration}
                    handleRegistrationModalOpen={handleOpenRegistration}
                    handleLoginModalOpen={handleOpenLogin}
                    fields={registrationFields}
                    title="Registration"
                  />
                )}
                {openLogin && (
                  <ReusableModalWindow
                    open={openLogin}
                    handleLoginModalOpen={handleOpenLogin}
                    handleRegistrationModalOpen={handleOpenRegistration}
                    fields={loginFields}
                    title="Login"
                    onLoginSuccess={handleLogin}
                  />
                )}
              </>

  )
}

export default Authenticate