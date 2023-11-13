import "react-native-gesture-handler";
import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import Login from "./navigation/screens/Authentication/Login";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./navigation/screens/Authentication/Signup";

const Stack = createStackNavigator();

function App() {
  // return <MainContainer />
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="MainContainer"
            component={MainContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
