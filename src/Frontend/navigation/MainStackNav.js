import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackView } from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../pages/loginSignup/Login.js';
import RegisterPage from '../pages/loginSignup/RegisterForm';
import HomePage from '../pages/workflow/HomePage.js';
import AnyBank from '../pages/workflow/AnyBank.js';
import AnyTransaction from '../pages/workflow/AnyTransaction.js';

const Stack = createStackNavigator();

function MainStackNav() {
  return (
    <NavigationContainer initialRouteName="RegisterPage">
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='LoginPage' headerMode="none" component={LoginPage} />
        <Stack.Screen name='RegisterPage' headerMode="none" component={RegisterPage} />
        <Stack.Screen name='HomePage' headerMode="none" component={HomePage} />
        <Stack.Screen name='AnyBank' headerMode="none" component={AnyBank} />
        <Stack.Screen name='AnyTransaction' headerMode="none" component={AnyTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainStackNav;