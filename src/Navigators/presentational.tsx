import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ProductListScreen} from '~/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function ProductNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
