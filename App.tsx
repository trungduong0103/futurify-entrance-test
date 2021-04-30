import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/home/Home";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const ApplicationStack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ApplicationStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <ApplicationStack.Screen name="Home" component={Home} />
        </ApplicationStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
