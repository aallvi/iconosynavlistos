import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Screens/HomeScreen';

export const Navigation =() => {

    const Stack = createNativeStackNavigator();



  return (
    

        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

    
  );
}