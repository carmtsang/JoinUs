/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserScreen from './src/components/User';
import HomeScreen from './src/components/Home';
import EventScreen from './src/components/Event';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import useAppData from './src/hooks/useAppData';

import {ThemeProvider, createTheme} from '@rneui/themed';
import EventTabs from './src/components/TabNav';

// React Native Element Theme
const theme = createTheme({
  lightColors: {
    primary: '#94B49F',
    secondary: '#B2A4FF ',
    success: '#4db6ac',
    background: '#FBFBFF',
  },
  darkColors: {
    primary: '#00ADB5',
    secondary: '#E94560',
    background: '#222831',
  },
  components: {
    Button: {
      color: 'rgba(111, 202, 186, 1)',
    },
  },
});

// passing additional props to a screne https://reactnavigation.org/docs/hello-react-navigation

const headerOptions = {
  headerStyle: {
    backgroundColor: '#faac33',
  },
  headerTintColor: '#222831',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const UserStack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <ThemeProvider theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={headerOptions}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Join Us!'}}
            />
            <Stack.Screen name="Events" component={EventTabs} />
            <Stack.Screen name="Profile" component={UserScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
