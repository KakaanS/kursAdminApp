import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";

const MomentDetail = ({ route }) => {
  const { course } = route.params;

  const handleMomentPress = (moment) => {
    navigation.navigate("MomentScreen", { moment });
  };

  return <ScrollView></ScrollView>;
};

export default MomentDetail;
