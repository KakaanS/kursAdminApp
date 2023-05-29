import { useContext } from "react";
import { View, Text, Pressable, FlatList } from "react-native";

// context
import { CourseContext } from "../context/CourseContext";

const CourseComponent = ({ navigation }) => {
  const { course } = useContext(CourseContext);
  const handleCorsePress = (course) => {
    navigation.navigate("Course", { course: course });
  };
  const renderItem = ({ item }) => {
    <Pressable onPress={() => handleCorsePress(item)}>
      <Text>{item.name}</Text>
    </Pressable>;
  };
  return (
    <View>
      <Text>Course!</Text>
      <FlatList
        data={course}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CourseComponent;
