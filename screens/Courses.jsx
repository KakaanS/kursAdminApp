import { View, Text, StyleSheet } from "react-native";

// components
import ViewCoursesComponent from "../components/ViewCourseComponent";

const Courses = ({ navigation }) => {
  return (
    <View>
      <ViewCoursesComponent navigation={navigation} />
    </View>
  );
};

export default Courses;
