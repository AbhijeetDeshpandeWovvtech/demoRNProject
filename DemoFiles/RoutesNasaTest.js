import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Nasa from '../screens/Nasa';
import Details from '../screens/Details';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nasa" component={Nasa} />
      <Stack.Screen name="Details" component={Details} />
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