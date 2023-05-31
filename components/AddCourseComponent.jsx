import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { CourseContext } from "../context/CourseContext";

const AddCourseComponent = ({ navigation }) => {
  const [step, setStep] = useState(1);
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

    if (step < 6) {
      setStep(step + 1);
    } else {
      setCourseName("");
      setCourseInfo("");
      setYoutubeLink("");
      setDescription("");
      navigation.navigate("Courses");
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>Step 1 of 6</Text>
            {/* Step 1 content */}
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
              placeholder="Youtube link"
              value={youtubeLink}
              onChangeText={setYoutubeLink}
            />
            <Button title="Next step" onPress={handleAddCourse} />
          </View>
        );
      case 2:
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>Step 2 of 6</Text>
            {/* Step 2 content */}
            {/* ... */}
          </View>
        );
      case 3:
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>Step 3 of 6</Text>
            {/* Step 3 content */}
            {/* ... */}
          </View>
        );
      case 4:
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>Step 4 of 6</Text>
            {/* Step 4 content */}
            {/* ... */}
          </View>
        );
      case 5:
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>Step 5 of 6</Text>
            {/* Step 5 content */}
            {/* ... */}
          </View>
        );
      case 6:
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>Step 6 of 6</Text>
            {/* Step 6 content */}
            {/* ... */}
          </View>
        );
      default:
        return null;
    }
  };

  return <>{renderStepContent()}</>;
};

export default AddCourseComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    height: "100%",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
  },
});
