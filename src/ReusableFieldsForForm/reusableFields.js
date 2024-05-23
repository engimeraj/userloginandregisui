export const namefield = (name, label,value) => {

    return (
      {
        name: name,
        label: label,
        type: 'text',
        initialvalue:value,
        id: name,
        placeholder: '',
        validation: {
          required: {
            value: true,
            message: 'required',
          },
          maxLength: {
            value: 30,
            message: '30 characters max',
          },
        },
      }
    )
  
  }
  
  
  export const descfield = (name, label) =>  {
    return({
      name: name,
      label: label,
      multiline: true,
      id: name,
      placeholder: 'write description ...',
      validation: {
        required: {
          value: true,
          message: 'required',
        },
        maxLength: {
          value: 200,
          message: '200 characters max',
        },
      },
  
    })
    
  }
  
  export const passwordfield = (name, label,value) => {
    return ({
      name: name,
      label: label,
      type: 'password',
      id: name,
      placeholder: '',
      initialvalue:value,
      validation: {
        required: {
          value: true,
          message: 'required',
        },
        minLength: {
          value: 6,
          message: 'min 6 characters',
        },
      },
    })
  }
  
  export const confirmpasswordfield = (name, label,value) => {
    return ({
      name: name,
      label: label,
      type: 'password',
      id: name,
      initialvalue:value,
      placeholder: '',
      validation: {
        required: {
          value: true,
          message: 'required',
        },
        minLength: {
          value: 6,
          message: 'min 6 characters',
        },
        
      },
    })
  }
  
  export const phonenumberField= (name, label) =>  {
  
    return({
      name: name,
      label: label,
      type: 'number',
      id: name,
      // initialvalue:value,
      placeholder: 'Enter your Phone Number',
      validation: {
        required: {
          value: true,
          message: 'required',
        },
        
        minLength: {
          value: 10,
          message: 'min 10 digits',
        },
        maxLength: {
          value: 10,
          message: 'Invalid Phone Number',
        },
      },
  
    })
   
  }
  
  export const emailfield = (name, label) =>  {
    return({
      name: name,
      label: label,
      type: 'email',
      id: name,
      placeholder: 'write a random email address',
      validation: {
        required: {
          value: true,
          message: 'required',
        },
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'not valid',
        },
      },
  
    })
  
  }
  