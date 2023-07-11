import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useState, useContext, useCallback } from "react";
import YoutubeIframe from "react-native-youtube-iframe";

// context:
import { WatchedVideosContext } from "../context/WatchedVideosContext";

const MomentDetail = ({ moment }) => {
  const [watched, setWatched] = useState(false);
  const { addWatchedVideo } = useContext(WatchedVideosContext);

  const handleStateChange = (event) => {
    console.log("event:", event);
    if (event === "ended") {
      setWatched(true);
      addWatchedVideo(moment.videoId);
    }
    console.log("watched:", watched);
  };

  return (
    <ScrollView style={styles.momentContainer}>
      <YoutubeIframe
        height={219}
        videoId={moment.videoId}
        play={false}
        onChangeState={handleStateChange}
      />
      <Text style={styles.titleText} textAlign="left">
        {moment.videoDescriptions}
      </Text>
      <Text style={styles.momentText}>{moment.videoGoals.join(", ")}</Text>
    </ScrollView>
  );
};

export default MomentDetail;

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
    fontSize: 16,
    margin: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  youtubePlayer: {
    height: 219,
  },
});
