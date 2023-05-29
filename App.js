import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

// Screens
import HomeScreen from "./screens/Home";
import Courses from "./screens/Courses";
import AddCourse from "./screens/AddCourse";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Courses" component={Courses} />
        <Tab.Screen name="Add Course" component={AddCourse} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
