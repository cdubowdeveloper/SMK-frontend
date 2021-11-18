import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import * as React from 'react';
import LoginPage from '../Pages/Login.js';
import HomePage from '../Pages/Home.js';
import RegisterForm from '../Pages/RegisterForm';

const Stack = createStackNavigator();

function MainStackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='LoginPage' headerMode="none" component={LoginPage} />
        <Stack.Screen name='SignupPage' headerMode="none" component={RegisterForm} />
        <Stack.Screen name='HomePage' headerMode="none" component={HomePage} />


      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainStackNav;