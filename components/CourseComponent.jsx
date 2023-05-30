import react from "react";
import { View, Text } from "react-native";

const CourseComponent = ({ course }) => {
  const { course } = route.params;

  return (
    <View>
      <Text>{course.name}</Text>
      <Text>{course.info}</Text>
      <Text>{course.youtube}</Text>
    </View>
  );
};

export default CourseComponent;
