import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoutNames from './RouteNames';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={RoutNames.login.name}>
        <Stack.Screen
          name={RoutNames.login.name}
          component={RoutNames.login.component}
        />
        <Stack.Screen
          name={RoutNames.disclaimer.name}
          component={RoutNames.disclaimer.component}
        />
        <Stack.Screen
          name={RoutNames.stationList.name}
          component={RoutNames.stationList.component}
        />
        <Stack.Screen
          name={RoutNames.details.name}
          component={RoutNames.details.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
