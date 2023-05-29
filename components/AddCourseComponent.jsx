import react, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { CourseContext } from "../context/CourseContext";

const addCourseComponent = () => {
  const [courseName, setCourseName] = useState("");
  const [courseInfo, setCourseInfo] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const { addCourse } = useContext(CourseContext);

  const handleAddCourse = () => {
    const newCourse = {
      name: courseName,
      info: courseInfo,
      youtube: youtubeLink,
    };
    addCourse(newCourse);

    setCourseName("");
    setCourseInfo("");
    setYoutubeLink("");
  };
  return (
    <View>
      <TextInput
        placeholder="Name of course"
        value={courseName}
        onChange={setCourseName}
      />
      <TextInput
        placeholder="Course information"
        value={courseInfo}
        onChange={setCourseInfo}
      />
      <TextInput
        placeholder="Youtubelink"
        value={youtubeLink}
        onChange={setYoutubeLink}
      />
      <Button title="Add course" onPress={handleAddCourse} />
    </View>
  );
};

export default addCourseComponent;
