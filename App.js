import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import initDatabase from './src/services/initDatabase.service'
const Stack = createStackNavigator();

import Routes from './src/Routes'

function App() {

  useEffect(() => {
    initDatabase()
  }, [])

  return (
    <Routes />
  );
}

export default App
