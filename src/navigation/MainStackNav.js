import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackView } from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../src/pages/Login.js.js';
import HomePage from '../pages/Home.js';
import ChildHomePage from '../src/pages/ChildHomePage.js';
import ChildAnyBank from '../pages/ChildAnyBank.js';
import ChildAnyTransaction from '../src/pages/ChildAnyTransaction.js';
import ParentHomePage from '../../../pages/ParentHomePage';
import ParentSaveBank from '../pages/ParentSaveBank';
import ParentShareBank from '../pages/ParentShareBank';
import ParentSpendBank from '../../../pages/ParentSpendBank';

const Stack = createStackNavigator();

function MainStackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='LoginPage' headerMode="none" component={LoginPage} />
        <Stack.Screen name='HomePage' headerMode="none" component={HomePage} />
        <Stack.Screen name='ChildHomePage' headerMode="none" component={ChildHomePage} />
        <Stack.Screen name='ChildAnyBank' headerMode="none" component={ChildAnyBank} />
        <Stack.Screen name='ChildAnyTransaction' headerMode="none" component={ChildAnyTransaction} />
        <Stack.Screen name="ParentHomePage" headerMode="none" component={ParentHomePage}/>
        <Stack.Screen name="ParentSaveBank" headerMode="none" component={ParentSaveBank}/>
        <Stack.Screen name="ParentShareBank" headerMode="none" component={ParentShareBank}/>
        <Stack.Screen name="ParentSpendBank" headerMode="none" component={ParentSpendBank}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainStackNav;