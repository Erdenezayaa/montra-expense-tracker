import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardStack from './onboard';

function Routes() {
  return (
    <NavigationContainer>
      <OnboardStack />
    </NavigationContainer>
  );
}

export default Routes;
