import react from "react";
import { View, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const CourseComponent = ({ course }) => {
  const { course } = route.params;

  return (
    <View>
      <Text>{course.name}</Text>
      <Text>{course.info}</Text>
      <YoutubePlayer height={300} play={true} videoId={course.youtube} />
    </View>
  );
};

export default CourseComponent;
