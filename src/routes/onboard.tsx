import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import WelcomeScreen from '@app/screens/welcome';
import SignupScreen from '@app/screens/signup';

const Stack = createNativeStackNavigator();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  statusBarStyle: 'dark',
};

export type RootStackParamList = {
  Welcome: undefined;
  Signup: undefined;
};

function OnboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={navigationOptions}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
}

export default OnboardStack;
