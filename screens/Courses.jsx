import { View, Text, StyleSheet } from "react-native";

// Styles
import styles from "../styles/main";

// components
import ViewCoursesComponent from "../components/ViewCourseComponent";

const Courses = () => {
  return (
    <View style={styles.container}>
      <ViewCoursesComponent />
    </View>
  );
};

export default Courses;
