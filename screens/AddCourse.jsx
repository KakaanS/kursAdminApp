import React from "react";
import { View } from "react-native";

// Components
import AddNewCourseComponent from "../components/AddCourseComponent";

const AddCourse = ({ navigation }) => {
  return (
    <View>
      <AddNewCourseComponent navigation={navigation} />
    </View>
  );
};

export default AddCourse;
