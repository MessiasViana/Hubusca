import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import HomeScreen from '../pages/HomeScreen';
import ListScreen from '../pages/ListScreen';
import UserScreen from '../pages/UserScreen';

import { Feather, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Stack = () => {
	const theme = useTheme();
	const { background_color, primary_color, secondary_detail_color, detail_color } = theme;

	return (
		<>
			<Tab.Navigator
				screenOptions={{
					tabBarStyle: {
						backgroundColor: background_color,
						paddingTop: 5,
						paddingBottom: 5,
					},
					tabBarActiveTintColor: secondary_detail_color,
					headerTitle: 'Hubusca',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: background_color
					},
					headerTitleStyle: {
						color: detail_color,
					}
				}}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
					}}
				/>

				<Tab.Screen
					name="Lista"
					component={ListScreen}
					options={{
						tabBarIcon: ({ color, size }) => <Feather name="list" size={size} color={color} />
					}}
				/>

				<Tab.Screen
					name="UserScreen"
					component={UserScreen}
					options={{
						tabBarButton: () => null
					}}
				/>
			</Tab.Navigator>
		</>
	);
};

export default Stack;
