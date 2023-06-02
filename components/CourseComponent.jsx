import React from "react";
import { View, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const CourseDetails = ({ route }) => {
  const { course } = route.params;

  return (
    <View>
      <Text>{course.title}</Text>
      <Text>{course.description}</Text>
      <YoutubePlayer height={300} play={true} videoId={course.youtube} />
    </View>
  );
};

export default CourseDetails;
