import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './home/Home';
import Profile from './profile/Profile';
import LoginHome from './loginHome/LoginHome'
import Login from './login/Login';
import Music from './music/Music';
import Header from '../components/header/Header';
import { colors } from '../theme/colors';
import ProfileHeader from '../components/profileHeader/ProfileHeader';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Root() {

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, focused }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = "home"
					} else if (route.name === 'Playlist') {
						iconName = "search";
					} else if (route.name === 'Random') {
						iconName = "star";
					} else if (route.name === 'Profile') {
						iconName = "user";
					}
					return <Icon name={iconName} size={30} color={color} solid={focused} />;
				},
				tabBarStyle: {
					backgroundColor: colors.brand.primary,
					height: 80,
					borderTopWidth: 0,
				},
				tabBarActiveTintColor: colors.white,
				tabBarInactiveTintColor: colors.brand.secondary,
				tabBarShowLabel: false
			})}
		>

			<Tab.Screen
				name="Home"
				component={Home}
				options={{ header: () => (<Header />) }}
			/>

			<Tab.Screen
				name="Playlist"
				component={Home}
				options={{ header: () => (<Header />) }}
			/>

			<Tab.Screen
				name="Random"
				component={Home}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{ header: () => (<ProfileHeader />) }}
			/>

		</Tab.Navigator>
	);
};

function Routes() {

	return (
		<NavigationContainer>
			<Stack.Navigator>

				<Stack.Screen
					name="LoginHome"
					component={LoginHome}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Home"
					component={Root}
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

export default Routes;
