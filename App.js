import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

// Screens
import HomeScreen from "./screens/Home";
import Courses from "./screens/Courses";
import AddCourse from "./screens/AddCourse";

// Context
import { CourseProvider } from "./context/CourseContext";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CourseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Courses" component={Courses} />
          <Drawer.Screen name="Add Course" component={AddCourse} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CourseProvider>
  );
}
