import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";

// Screens
import HomeScreen from "./screens/Home";
import Courses from "./screens/Courses";
import AddCourse from "./screens/AddCourse";
import SpecificScreen from "./screens/SpecificScreen";

// Context
import { CourseProvider } from "./context/CourseContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SpecificScreen" component={SpecificScreen} />
  </Stack.Navigator>
);
// added the above and below to access screens, but I get double headers. Check in later.
const CoursesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Courses" component={Courses} />
    <Stack.Screen name="SpecificScreen" component={SpecificScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <CourseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Courses" component={CoursesStack} />
          <Drawer.Screen name="Add Course" component={AddCourse} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CourseProvider>
  );
}
