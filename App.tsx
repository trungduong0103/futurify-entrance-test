import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home/Home';

const ApplicationStack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <ApplicationStack.Navigator>
        <ApplicationStack.Screen name="Home" component={Home} />
      </ApplicationStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
