import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import { userService } from '../UserService/userService';
import { useForm, FormProvider } from 'react-hook-form';

export default function EnrollMentForm() {
    const [selectedDate, setSelectedDate] = React.useState(dayjs('2022-04-17')); // Use a more descriptive name for clarity
    const methods = useForm(); // Fixed typo: methods instead of method
    const handleSubmit = async () => {
        try {
            // Get the date string in the desired format
            const formattedDate = selectedDate.format('YYYY-MM-DD');

            // Set the date value in the form data
            methods.setValue('dob', formattedDate);
           console.log("date is ",methods.getValues());
            // Submit the form data
            const response = await userService.enrollmentService(methods.getValues());
           alert(response.data) // Handle response as needed
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}> {/* Added onSubmit handler */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="DOB"
                            value={selectedDate}
                            name="dob" // Added name property
                            onChange={(newValue) => setSelectedDate(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <Button style={{ marginTop: "4px" }} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </FormProvider>
    );
}
