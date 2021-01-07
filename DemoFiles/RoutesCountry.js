import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import CountryDetails from '../screens/CountryDetails';
import Home from '../screens/Home';
import CountryWeather from '../screens/CountryWeather';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CountryDetails" component={CountryDetails} />
      <Stack.Screen name="CountryWeather" component={CountryWeather} />
    </Stack.Navigator>
  );
}
const Routes = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default Routes;