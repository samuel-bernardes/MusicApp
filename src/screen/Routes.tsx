import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './home/Home';
import Profile from './profile/Profile';
import Header from '../components/header/Header';
import LoginHome from './loginHome/LoginHome'
import Login from './login/Login';
import Music from './music/Music';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Root() {

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = "home"
					} else if (route.name === 'Playlist') {
						iconName = "playlist-play";
					} else if (route.name === 'Random') {
						iconName = "shuffle";
					} else if (route.name === 'Profile') {
						iconName = "account-circle";
					}
					return <Icon name={iconName} size={30} color={color} />;
				},
				tabBarStyle: {
					backgroundColor: "#27153E",
					height: 80,
					borderTopWidth: 0,
				},
				tabBarActiveTintColor: '#FFFFFF',
				tabBarInactiveTintColor: '#3C2D51',
				tabBarShowLabel: false
			})}
		>

			<Tab.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Playlist"
				component={Home}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Random"
				component={Home}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/>

		</Tab.Navigator>
	);
};

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="LoginHome"
					component={LoginHome}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Music"
					component={Music}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Root"
					component={Root}
					options={{ headerShown: false }}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	)
}
