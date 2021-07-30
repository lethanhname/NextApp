import React, { useContext } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

import { GetStartedContext } from "./GetStartedContext";
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Confirm from './components/Confirm';

// Step titles
const labels = ["First Step", "Second Step", "Confirmation"];
const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Confirm />;
    default:
      throw new Error("Unknown step");
  }
};

const GetStartedSteps = () => {
  const { activeStep } = useContext(GetStartedContext);

  return (
    <>
      
        <div style={{ margin: "30px 0 50px" }}>
          <Typography variant="h4" align="center">
            Multi Step Form
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            style={{ margin: "10px 0" }}
          >
            React Material UI multi step form with basic form validation
            logic.
          </Typography>
        </div>
        <Stepper
          activeStep={activeStep}
          style={{ margin: "30px 0 15px" }}
          alternativeLabel
        >
          {labels.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>

        {handleSteps(activeStep)}
    </>
  );
};

export default GetStartedSteps;
