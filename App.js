import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Routes from './src/routes'

function App() {

  useEffect(() => {
  }, [])

  return (
    <Routes />
  );
}

export default App
