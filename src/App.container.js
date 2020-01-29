import React from 'react';
import NavigationUtils from './utils/navigation.utils';
import Router from './routers';

const AppContainer = (props) => {
  return (
    <Router 
      ref={navigatorRef => {
        NavigationUtils.setTopLevelNavigator(navigatorRef);
      }}
    />
  )
}

export default AppContainer;