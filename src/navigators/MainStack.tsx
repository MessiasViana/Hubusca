import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../pages/HomeScreen";
import ListScreen from "../pages/ListScreen";
import { primary_color, secondary_color, tertiary_color } from "../../assets/styles/styles";

import { AntDesign, Feather} from '@expo/vector-icons'; 

const Tab  = createBottomTabNavigator();

const Stack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: secondary_color,
          paddingTop: 5,
          paddingBottom: 5
        },
        tabBarActiveTintColor: primary_color
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (<AntDesign name="home" size={size} color={color} />),
          headerTitle: 'Hubusca',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: secondary_color,
          },
          headerTitleStyle: {
            color: tertiary_color
          }
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (<Feather name="list" size={size} color={color} />),
          headerTitle: 'Hubusca',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: secondary_color,
          },
          headerTitleStyle: {
            color: tertiary_color
          }
        }}
      
      />
    </Tab.Navigator>
  );
};

export default Stack;
