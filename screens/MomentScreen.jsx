import React from "react";
//Component
import MomentDetail from "../components/MomentComp";

const MomentScreen = ({ navigation, route }) => {
  const { moment } = route.params;

  return <MomentDetail navigation={navigation} moment={moment} />;
};

export default MomentScreen;
