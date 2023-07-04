import { useContext } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

// context
import { CourseContext } from "../context/CourseContext";

const CourseComponent = ({ navigation }) => {
  const { courses } = useContext(CourseContext);
  const handleCoursePress = (course) => {
    navigation.navigate("SpecificScreen", { course: course });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handleCoursePress(item)}>
      <View style={styles.courseContainer}>
        <Image
          source={{ uri: item.backgroundUrl }}
          style={styles.backgroundImage}
        />
        <Image source={{ uri: item.logoUrl }} style={styles.logoImage} />
        <Text style={styles.courseTitle}>{item.title}</Text>
      </View>
    </Pressable>
  );
  return (
    <View>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CourseComponent;

const styles = StyleSheet.create({
  courseContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 10,
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  logoImage: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 10,
    right: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
