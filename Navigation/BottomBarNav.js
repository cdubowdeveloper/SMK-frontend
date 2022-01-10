import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ParentHomePage from '../Pages/ParentHomePage';

const Tab = createBottomTabNavigator();

function BottomBarNav(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Banks" component={ParentHomePage}/>
            <Tab.Screen />
            <Tab.Screen />
            <Tab.Screen />
            <Tab.Screen />
        </Tab.Navigator>
    )
}

export default BottomBarNav;