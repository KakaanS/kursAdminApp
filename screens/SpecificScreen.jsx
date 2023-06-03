import React from "react";
//Component
import CourseDetails from "../components/CourseComponent";

const SpecificScreen = ({ navigation, route }) => {
  return <CourseDetails navigation={navigation} route={route} />;
};

export default SpecificScreen;
