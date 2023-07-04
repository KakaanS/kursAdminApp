import React, { useContext } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WatchedVideosContext } from "../context/WatchedVideosContext";

const CourseDetails = ({ route }) => {
  const { course } = route.params;
  const navigation = useNavigation();
  const { watchedVideos } = useContext(WatchedVideosContext);

  const handleMomentPress = (moment) => {
    const { videoOrder, videoId } = moment;

    if (videoOrder === 1 || watchedVideos.includes(moment.videoId)) {
      navigation.navigate("MomentScreen", { moment });
    } else {
      console.log("Video not watched yet");
      // create alert
    }
  };

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
        >
          <View style={styles.momentContainer}>
            <Text style={styles.momentText}>{moment.videoDescriptions}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

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
