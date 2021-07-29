import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Confirm from './components/Confirm';

const steps = ['First Step', 'Second Step', 'Confirm']

function GetStarted() {
  const theme = useTheme();

  const [formData, setFormData] = React.useState({
    name: '',
    company: ''
  });
  
  const updateFormData = ({name, value}) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const maxSteps = steps.length;
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <Step1 formData={formData} activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} updateFormData={updateFormData}/>
      case 1:
        return <Step2 formData={formData} activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} updateFormData={updateFormData}/>
      case 2:
        return <Confirm formData={formData} activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
      default:
        throw new Error('Unknown step')
    }
  }
    
  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
      {handleSteps(activeStep)}

            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default GetStarted;
