import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '@app/screens/welcome';

const Stack = createNativeStackNavigator();

const navigationOptions = {
  headerShown: false,
};

function OnboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
}

export default OnboardStack;
