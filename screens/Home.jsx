import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHead}></Text>
      <Text style={styles.textHead}>Welcome</Text>
      <Text style={styles.text}>
        This is a simple app for sharing and learning.
      </Text>
      <Text style={styles.text}>
        Feel free to checkout our courses, or by all means, add a course
        yourself...
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  text: {
    fontSize: 15,
    marginTop: 10,
  },
  textHead: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
