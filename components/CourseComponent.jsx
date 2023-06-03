import React from "react";
import { View, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const CourseDetails = ({ navigation, route }) => {
  const { course } = route.params;

  return (
    <View>
      <Text>{course.title}</Text>
      <Text>{course.description.join(" ")}</Text>
      {course.moments.map((moment) => (
        <View key={moment.videoOrder}>
          <Text>{moment.videoDescriptions}</Text>
          <Text>{moment.videoGoals.join(", ")}</Text>
          <YoutubePlayer height={300} play={true} videoId={moment.videoId} />
        </View>
      ))}
    </View>
  );
};

export default CourseDetails;
