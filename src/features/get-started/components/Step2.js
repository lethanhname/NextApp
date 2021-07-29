import React from 'react';
import Button from '@material-ui/core/Button';
function Step2({ formData, activeStep, handleNext, handleBack, updateFormData }) {
  function handleParam (event) {
    
    const name = event.target.name;
    const value = event.target.value;
    updateFormData({name,value});
  };
  return (
    <div>
      <p>
        name: <input name="name" onChange={handleParam} />
      </p>      
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

export default Step2;