import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/screens/Home";
import { store } from "./src/app/store";
import About from "./src/screens/About";
import DetailsAbout from "./src/screens/DetailsAbout";
import Nav from "./src/components/Nav";
import Profile from "./src/screens/Profile";
import History from "./src/screens/History";
import Whistlist from "./src/screens/Whistlist";
import Search from "./src/screens/Search";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Whislist" component={Whistlist} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="DetailsAbout" component={DetailsAbout} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </Provider>
      <Nav />
    </NavigationContainer>
  );
}
