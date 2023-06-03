import React from "react";
//Component
import MomentDetail from "../components/MomentComp";

const MomentScreen = ({ navigation, route }) => {
  return <MomentDetail navigation={navigation} route={route} />;
};

export default MomentScreen;
