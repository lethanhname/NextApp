import React from 'react';
import AppFooter from './AppFooter';
import AppAppBar from './AppAppBar';
import Container from '@material-ui/core/Container';
export default function AppTheme(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        {children}
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}
