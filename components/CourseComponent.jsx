import React, { useContext, useCallback } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

//context
import { WatchedVideosContext } from "../context/WatchedVideosContext";
//Components
import CourseFilter from "./CourseFilter";

const CourseDetails = React.memo(({ route }) => {
  const { course } = route.params;
  const navigation = useNavigation();
  const { watchedVideos } = useContext(WatchedVideosContext);

  const handleMomentPress = useCallback(
    (moment) => {
      const { videoOrder, videoId } = moment;
      const nextMoment = course.moments.find(
        (m) => parseInt(m.videoOrder) === parseInt(videoOrder) + 1
      );

      if (videoOrder === 1 || watchedVideos.includes(moment.videoId)) {
        navigation.navigate("MomentScreen", { moment: nextMoment });
      } else {
        console.log("Video not watched yet");
      }
    },
    [course.moments, watchedVideos]
  );

  return (
    <ScrollView>
      <Text style={styles.titleText}>{course.title}</Text>
      <Text style={styles.descText}>{course.description.join(" ")}</Text>
      {course.moments.map((moment) => (
        <Pressable
          key={moment.videoOrder}
          onPress={() => handleMomentPress(moment)}
          disabled={
            moment.videoOrder !== 1 && !watchedVideos.includes(moment.videoId)
          }
          style={[
            styles.momentContainer,
            moment.videoOrder !== 1 &&
              !watchedVideos.includes(moment.videoId) && { opacity: 0.5 },
          ]}
        >
          <View style={styles.momentContainer}>
            <Text style={styles.momentText}>{moment.videoDescriptions}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
});

export default CourseDetails;

const styles = StyleSheet.create({
  momentContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 10,
  },
  momentText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  descText: {
    fontSize: 18,
    textAlign: "left",
    margin: 10,
  },
});
