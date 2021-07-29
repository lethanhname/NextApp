import React from 'react';
import TextField from '@material-ui/core/TextField'
function Step1({ updateFormData }) {
  function handleParam (event) {
    
    const name = event.target.name;
    const value = event.target.value;
    updateFormData({name,value});
  };
  return (
    <div>
        <TextField
            fullWidth
            label="First Name"
            name="company"
            placeholder="Your first name"
            onChange={handleParam}
          />
    </div>
  );
}

export default Step1;