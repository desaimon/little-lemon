import * as React from 'react';
// import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './OnboardingScreen';


const Stack = createNativeStackNavigator();


export default function RootLayout() {
  return (    
      <Stack.Navigator>
        <Stack.Screen 
          name="OnboardingScreen" 
          component={OnboardingScreen}
          options = {{headerShown: false}} />
      </Stack.Navigator>      
  );
}
