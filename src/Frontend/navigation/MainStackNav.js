import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../pages/loginSignup/Login.js';
import RegisterPage from '../pages/loginSignup/RegisterForm';
import HomePage from '../pages/workflow/HomePage.js';
import AnyBank from '../pages/workflow/AnyBank.js';
import AnyTransaction from '../pages/workflow/AnyTransaction.js';
import Settings from '../pages/workflow/Settings';
import Profile from '../pages/workflow/Profile.js';
import LoginInfo from '../pages/workflow/LoginInfo.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {


            if (route.name === 'Banks') {
              return <Fontisto name={"dollar"} size={size} color={color} />;
            } else if (route.name === 'Settings') {
              return <Ionicons name={'ios-settings-sharp'} size={size} color={color} />;
            } else if (route.name === 'Badges') {
              return <Ionicons name={'trophy-outline'} size={size} color={color} />;
            } else if (route.name === 'Goals') {
              return <Ionicons name={'md-pencil-sharp'} size={size} color={color} />;
            } 

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        
        })}
      >

      <Tab.Screen name="Banks" options={{ headerShown: false }} component={HomePage} />
      <Tab.Screen name='Goals' options={{ headerShown: false }} headerMode="none" component={HomePage} />
      <Tab.Screen name='Badges' options={{ headerShown: false }} headerMode="none" component={HomePage} />
      <Tab.Screen name='Settings' options={{ headerShown: false }} headerMode="none" component={Settings} />
    </Tab.Navigator>
  );
}

function MainStackNav() {
  return (
    <NavigationContainer initialRouteName="RegisterPage">
      <Stack.Navigator screenOptions={{headerShown: false}} >

      <Stack.Screen name='LoginPage' headerMode="none" component={LoginPage} />
      <Stack.Screen name='HomePage' headerMode="none" component={HomeTabs} />

      
        
        <Stack.Screen name='RegisterPage' headerMode="none" component={RegisterPage} />

        <Stack.Screen name='AnyBank' headerMode="none" component={AnyBank} />
        <Stack.Screen name='AnyTransaction' headerMode="none" component={AnyTransaction} />

        <Stack.Screen name='Profile' headerMode="none" component={Profile}/>
        <Stack.Screen name='Login Information' headerMode="none" component={LoginInfo}/>
      </Stack.Navigator>


    </NavigationContainer>
  )
};

export default MainStackNav;