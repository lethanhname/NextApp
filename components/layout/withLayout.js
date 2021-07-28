import React from 'react';
import AppFooter from './AppFooter';
import AppAppBar from './AppAppBar';

export default function withLayout(Component) {
  function WithLayout(props) {
    return (
      <React.Fragment>
      <AppAppBar />
      <Component {...props} />
      <AppFooter />
    </React.Fragment>
    );
  }

  return WithLayout;
}
