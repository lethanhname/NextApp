import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Step1({ formData, activeStep, handleNext, handleBack, updateFormData }) {
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
          <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {'Next'}
                  </Button>
                </div>
    </div>
  );
}

export default Step1;