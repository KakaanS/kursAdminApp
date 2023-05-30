import react, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { CourseContext } from "../context/CourseContext";

const addCourseComponent = ({ navigation }) => {
  const [courseName, setCourseName] = useState("");
  const [courseInfo, setCourseInfo] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const { addCourse } = useContext(CourseContext);

  const handleAddCourse = () => {
    const newCourse = {
      id: Math.floor(Math.random() * 100000000),
      name: courseName,
      info: courseInfo,
      description: description,
      youtube: youtubeLink,
    };
    addCourse(newCourse);

    setCourseName("");
    setCourseInfo("");
    setYoutubeLink("");
    setDescription("");
    navigation.navigate("Courses");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Name of course"
        value={courseName}
        onChangeText={setCourseName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Course information"
        value={courseInfo}
        onChangeText={setCourseInfo}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Youtubelink"
        value={youtubeLink}
        onChangeText={setYoutubeLink}
      />
      <TextInput
        style={styles.textInputDisc}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add course" onPress={handleAddCourse} />
    </View>
  );
};

export default addCourseComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
  },
  textInputDisc: {
    height: 100,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
  },
});
