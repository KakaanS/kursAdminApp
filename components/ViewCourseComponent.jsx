import { useContext } from "react";
import { View, Text, Pressable, FlatList } from "react-native";

// context
import { CourseContext } from "../context/CourseContext";

const CourseComponent = ({ navigation }) => {
  const { courses } = useContext(CourseContext);
  const handleCoursePress = (course) => {
    navigation.navigate("Course", { courses: course });
  };
  const renderItem = ({ item }) => (
    <Pressable onPress={() => handleCoursePress(item)}>
      <Text>{item.name}</Text>
    </Pressable>
  );
  return (
    <View>
      <Text>Course!</Text>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CourseComponent;
