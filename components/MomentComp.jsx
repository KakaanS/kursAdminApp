import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";

const MomentDetail = ({ moment }) => {
  const [watched, setWatched] = useState(false);

  return (
    <ScrollView style={styles.momentContainer}>
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${moment.videoId}` }}
        style={styles.youtubePlayer}
      />
      <Text style={styles.titleText}>{moment.videoDescriptions}</Text>
      <Text style={styles.momentText}>{moment.videoGoals.join(", ")}</Text>
    </ScrollView>
  );
};
//YoutubeIframe
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
    textAlign: "flex-start",
    margin: 10,
  },
  youtubePlayer: {
    height: 219,
  },
});
