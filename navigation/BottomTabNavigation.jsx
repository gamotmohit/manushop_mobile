//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Search } from "../screens";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/index';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevetion: 0,
        height: 70
    }
}

// create a component
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
             name="Home" 
             component={Home}
             options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused? "home" : "home-outline"} 
                    size={24}
                    color={focused? COLORS.primary : COLORS.gray2}
                    />
                }
             }}
            />
            <Tab.Screen
             name="Search" 
             component={Search}
             options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused? "search-sharp" : "search-sharp"} 
                    size={24}
                    color={focused? COLORS.primary : COLORS.gray2}
                    />
                }
             }}
            />
            <Tab.Screen
             name="Profile" 
             component={Profile}
             options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused? "person" : "person-outline"} 
                    size={24}
                    color={focused? COLORS.primary : COLORS.gray2}
                    />
                }
             }}
            />
        </Tab.Navigator>
    );
};


export default BottomTabNavigation;
