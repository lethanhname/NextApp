import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles'

import GetStartedProvider from './GetStartedContext';
import GetStartedSteps from './GetStartedSteps';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      padding: theme.spacing(3)
    }
  }
}));


function GetStarted() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <GetStartedProvider>
          <GetStartedSteps />
    </GetStartedProvider>
    </Paper>
    
  );
}

export default GetStarted;
