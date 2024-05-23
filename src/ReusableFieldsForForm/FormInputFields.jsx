import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
export const FormInputFields = ({
    name,
    label,
    type,
    id,
    placeholder,
    validation,
    className,
    initialvalue,
    handleInputChange
}) => {
    const {
        register,
        // setValue,
        formState: { errors },
    } = useFormContext()
    function onChangeHandler(e) {
        handleInputChange(e);
    }
    return (
        <div>
            {
                type === 'text' ?
                    <div key={name}>
                        <TextField

                            error={!!errors[name]}
                            id={id}
                            name={name}
                            type={type}
                            // label={label}
                            defaultValue={initialvalue}
                            helperText={errors[name] ? errors[name]['message'] : ''}
                            {...register(name, validation)}
                            onChange={onChangeHandler}
                        />

                    </div>

                    : type === 'email' ?

                        <div key={name}>
                            <TextField
                                error={!!errors[name]}
                                id={id}
                                name={name}
                                type={type}
                                // label={label}
                                defaultValue={initialvalue}
                                helperText={errors[name] ? errors[name]['message'] : ''}
                                {...register(name, validation)}
                                onChange={onChangeHandler}
                            />
                        </div>
                        : type === 'password' ?

                            <div key={name}>
                                <TextField
                                    error={!!errors[name]}
                                    id={id}
                                    name={name}
                                    type={type}
                                    // label={label}
                                    defaultValue={initialvalue}
                                    helperText={errors[name] ? errors[name]['message'] : ''}
                                    {...register(name, validation)}
                                    onChange={onChangeHandler}
                                />
                            </div>
                            : <div key={name}>
                                <span className="red-text"> invalid Field</span>

                            </div>
            }
        </div>
    )
};