import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ProductListScreen, EmptyCartScreen, CartScreen} from '~/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '~/shared';

const Stack = createNativeStackNavigator();

export function ProductNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: colors.screenBackground},
        }}>
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="EmptyCart" component={EmptyCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
