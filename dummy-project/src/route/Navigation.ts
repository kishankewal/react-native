import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { createStaticNavigation } from "@react-navigation/native";
import Register from "../screens/Register";

const RootStack = createNativeStackNavigator({
    screenOptions: {
        headerStyle: {
          backgroundColor: "#000", // Black background
        },
        headerTintColor: "#fff", // White text + back arrow
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        headerShadowVisible: false, // Remove bottom border
        contentStyle: {
          backgroundColor: "#0F0F1A", // Dark screen background
        },
    },
    screens : {
        "Login" : Login,
        "Register" : Register
    }
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;