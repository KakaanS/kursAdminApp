import { Text, View } from "react-native";
import react, { useContext } from "react";

// Context
import { CourseContext } from "../context/CourseContext";

// Components
import AddCourseComponent from "../components/AddCourseComponent";

const AddCourse = ({ navigation }) => {
  return (
    <View>
      <AddCourseComponent navigation={navigation} />
    </View>
  );
};

export default AddCourse;
