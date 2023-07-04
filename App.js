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
import MomentScreen from "./screens/MomentScreen";

// Context
import { CourseProvider } from "./context/CourseContext";
import WatchedVideosProvider from "./context/WatchedVideosContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreenOptions = {
  title: "Home",
};

const CouseScreenOptions = {
  title: "Courses",
};

const AddCouseScreenOptions = {
  title: "Add Course",
};

const HomeScreenComponent = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={HomeScreenOptions}
    />
    <Stack.Screen name="SpecificScreen" component={SpecificScreen} />
  </Stack.Navigator>
);

const CousesScreenComponent = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Couses"
      component={Courses}
      options={CouseScreenOptions}
    />
    <Stack.Screen name="SpecificScreen" component={SpecificScreen} />
    <Stack.Screen name="MomentScreen" component={MomentScreen} />
  </Stack.Navigator>
);

const AddCourseScreenComponent = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Add Course"
      component={AddCourse}
      options={AddCouseScreenOptions}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <WatchedVideosProvider>
      <CourseProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Start">
            <Drawer.Screen name="Home" component={HomeScreenComponent} />
            <Drawer.Screen name="Courses" component={CousesScreenComponent} />
            <Drawer.Screen
              name="Add Course"
              component={AddCourseScreenComponent}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </CourseProvider>
    </WatchedVideosProvider>
  );
}
