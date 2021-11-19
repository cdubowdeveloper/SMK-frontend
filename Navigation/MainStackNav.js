import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import * as React from 'react';
import LoginPage from '../Pages/Login.js';
import HomePage from '../Pages/Home.js';
import ChildHomePage from '../Pages/ChildHomePage.js';
import ChildSaveBank from '../Pages/ChildSaveBank.js';
import ChildSpendBank from '../Pages/ChildSpendBank.js';
import ChildShareBank from '../Pages/ChildShareBank.js';
import EnterShareTransaction from '../Pages/EnterShareTransaction.js';
import EnterSaveTransaction from '../Pages/EnterSaveTransaction.js';
import EnterSpendTransaction from '../Pages/EnterSpendTransaction.js';

const Stack = createStackNavigator();

function MainStackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='LoginPage' headerMode="none" component={LoginPage} />
        <Stack.Screen name='HomePage' headerMode="none" component={HomePage} />
        <Stack.Screen name='ChildHomePage' headerMode="none" component={ChildHomePage} />
        <Stack.Screen name='ChildSaveBank' headerMode="none" component={ChildSaveBank} />
        <Stack.Screen name='ChildSpendBank' headerMode="none" component={ChildSpendBank} />
        <Stack.Screen name='ChildShareBank' headerMode="none" component={ChildShareBank} />
        <Stack.Screen name='EnterShareTransaction' headerMode="none" component={EnterShareTransaction} />
        <Stack.Screen name='EnterSaveTransaction' headerMode="none" component={EnterSaveTransaction} />
        <Stack.Screen name='EnterSpendTransaction' headerMode="none" component={EnterSpendTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainStackNav;