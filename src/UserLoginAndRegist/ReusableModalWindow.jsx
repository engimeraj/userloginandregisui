import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormInputFields } from '../ReusableFieldsForForm/FormInputFields'
import { useForm, FormProvider } from 'react-hook-form';
import { userService} from '../UserService/userService';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxWidth: '90vw', // Limiting maximum width to 90vw to prevent overflow on smaller screens
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflowY: 'auto', // Adding scrollbar on Y-axis
};

function ReusableModalWindow({ open, 
    handleRegistrationModalOpen, handleLoginModalOpen,
     fields, title ,onLoginSuccess}) {
    const methods = useForm();
    const [formData, setFormData] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };
    const onSubmit =  methods.handleSubmit(async data => {
        console.log(data);
        if(title==='Registration'){
        const response = await userService.registrationService(data);

        if (response.data) {
            setSuccessMessage(response.data);
            setTimeout(() => {
                setSuccessMessage(''); 
                    handleRegistrationModalOpen(false);
                    handleLoginModalOpen(true);
            }, 3000);
        }
        }
        else if(title==='Login'){
          const response= await userService.loginService(data);
          if (response.status >= 200 && response.status <= 300){
            localStorage.setItem('token',response.data.jwt);
            // console.log("jwt token ",localStorage.getItem('token'));
            setSuccessMessage(response.data.message); 
            setTimeout(() => {
                setSuccessMessage(''); 
                onLoginSuccess(true)
            }, 3000);   
        }
        else{
              setSuccessMessage(response.data.message);  
        }
                                       
        }
    });

    function handleModalWindowClose() {
        if (title === 'Registration') {
            handleRegistrationModalOpen(false);
        } else if (title === 'Login') {
            handleLoginModalOpen(false);
            setSuccessMessage('');
        }
    }

    function handleModalWindowOpen(value) {
        if (title === 'Registration') {
            handleLoginModalOpen(value);
            handleRegistrationModalOpen(false);
        } else if (title === 'Login') {
            handleRegistrationModalOpen(value);
            handleLoginModalOpen(false);
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleModalWindowClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{ ...style }}>
                <Box sx={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                    <FormProvider {...methods}>
                        <h2 id="modal-title">{title}</h2>
                        <form onSubmit={e=>e.preventDefault()} autoComplete="off">
                            {fields.map((field) => (
                                <div key={field.name}>
                                    <label htmlFor={field.name}>{field.label}</label>
                                    <FormInputFields {...field} handleInputChange={handleInputChange}/>
                                </div>
                            ))}
                            <Button style={{ marginTop: "4px" }} type="submit" variant="contained" color="primary" onClick={onSubmit}>
                                Submit
                            </Button>
                        </form>
                    </FormProvider>
                    {successMessage && (
                        <p style={{ color: 'green' }}>{successMessage}</p>
                    )}
                    {title === 'Registration' && (
                        <p>Already registered? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleModalWindowOpen(true)}>Login</span></p>
                    )}
                    {title === 'Login' && (
                        <p>Not registered yet? <span style={{ color: 'green', cursor: 'pointer' }} onClick={() => handleModalWindowOpen(true)}>Register</span></p>
                    )}
                </Box>
            </Box>
        </Modal>
    );
}

export default ReusableModalWindow;
