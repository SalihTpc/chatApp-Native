import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./screens/Chats";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "./config/constants";
import SignUp from "./screens/SignUp";

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Chats") {
          iconName = focused ? "chatbubbles" : "chatbubbles-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "settings-outline";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tabs.Screen name="Chats" component={Chats} />
    <Tabs.Screen name="Settings" component={Settings} />
  </Tabs.Navigator>
);

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Tabs" component={TabsScreen} />
        <MainStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ presentation: "modal" }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

{
  headerShown = false;
}
