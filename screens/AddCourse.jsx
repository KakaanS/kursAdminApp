import { Text, View } from "react-native";
import react, { useContext } from "react";

// Styles
import styles from "../styles/main";

// Context
import { CourseContext } from "../context/CourseContext";

// Components
import AddCourseComponent from "../components/AddCourseComponent";

const AddCourse = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddCourseComponent navigation={navigation} />
    </View>
  );
};

export default AddCourse;
