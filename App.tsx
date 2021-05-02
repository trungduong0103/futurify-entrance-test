import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import routes, { ApplicationStackParamList } from "./src/routes/routes";

const ApplicationStack = createStackNavigator<ApplicationStackParamList>();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ApplicationStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {routes.map(({ name, component }) => (
            <ApplicationStack.Screen name={name} component={component} />
          ))}
        </ApplicationStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
