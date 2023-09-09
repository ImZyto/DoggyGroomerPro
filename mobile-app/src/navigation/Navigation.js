import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen'; // Importuj ekran główny

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{ title: 'Main Screen' }}
                />
                {/* Dodaj inne ekrany, jeśli ich będziesz miał */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;