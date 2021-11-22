import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackView } from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../Pages/Login.js';
import HomePage from '../Pages/Home.js';
import ParentHomePage from '../Pages/ParentHomePage';
import ParentSaveBank from '../Pages/ParentSaveBank';
import ParentShareBank from '../Pages/ParentShareBank';
import ParentSpendBank from '../Pages/ParentSpendBank';

const Stack = createStackNavigator();

function MainStackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='LoginPage' headerMode="none" component={LoginPage} />
        <Stack.Screen name='HomePage' headerMode="none" component={HomePage} />
        <Stack.Screen name="ParentHomePage" headerMode="none" component={ParentHomePage}/>
        <Stack.Screen name="ParentSaveBank" headerMode="none" component={ParentSaveBank}/>
        <Stack.Screen name="ParentShareBank" headerMode="none" component={ParentShareBank}/>
        <Stack.Screen name="ParentSpendBank" headerMode="none" component={ParentSpendBank}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainStackNav;