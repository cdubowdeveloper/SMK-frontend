import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackView } from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../pages/loginSignup/Login.js';
import RegisterPage from '../pages/loginSignup/RegisterForm';
import ChildHomePage from '../pages/childWorkflow/ChildHomePage.js';
import ChildAnyBank from '../pages/childWorkflow/ChildAnyBank.js';
import ChildAnyTransaction from '../pages/childWorkflow/ChildAnyTransaction.js';
import ParentHomePage from '../pages/parentWorkflow/ParentHomePage';
import ParentSaveBank from '../pages/parentWorkflow/save/ParentSaveBank';
import ParentShareBank from '../pages/parentWorkflow/share/ParentShareBank';
import ParentSpendBank from '../pages/parentWorkflow/spend/ParentSpendBank';

const Stack = createStackNavigator();

function MainStackNav() {
  return (
    <NavigationContainer initialRouteName="RegisterPage">
      <Stack.Navigator screenOptions={{headerShown: false}} >
       <Stack.Screen name='ChildHomePage' headerMode="none" component={ChildHomePage} />
        <Stack.Screen name='LoginPage' headerMode="none" component={LoginPage} />
        <Stack.Screen name='RegisterPage' headerMode="none" component={RegisterPage} />
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