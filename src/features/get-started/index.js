import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Confirm from './components/Confirm';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  }
}));
const labels = ['First Step', 'Second Step', 'Confirm']


function GetStarted() {
  const classes = useStyles();
  const theme = useTheme();
  const maxSteps = labels.length;

  const [formData, setFormData] = React.useState({
    name: '',
    company: ''
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const updateFormData = ({name, value}) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const getFormData = () => {
    return formData;
  };
  
const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <Step1 updateFormData={updateFormData}/>
    case 1:
      return <Step2 updateFormData={updateFormData}/>
    case 2:
      return <Confirm formData={formData}/>
    default:
      throw new Error('Unknown step')
  }
}
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{labels[activeStep]}</Typography>
      </Paper>
      {handleSteps(activeStep)}
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default GetStarted;
