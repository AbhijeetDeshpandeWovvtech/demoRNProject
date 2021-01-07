import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import subjectsReducer from './SubjectsReducer';
import Home from './Home';
import Subject from './Subject';



const store = createStore(subjectsReducer);

const Stack = createStackNavigator();

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Subject" component={Subject} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
