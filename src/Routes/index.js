import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//IMPORTAÇÃO DAS TELAS
import HomeScreen from '../pages/Home'
import InfoUserScreen from '../pages/InfoUser'

function Rooutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="InfoUser"
                    component={InfoUserScreen}
                    options={{
                        headerTitle: props => <Text style={{fontSize: 20}}>Dados do usuário</Text>,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rooutes