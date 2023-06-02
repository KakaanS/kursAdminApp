import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CourseContext } from "../context/CourseContext";
import CATEGORIES from "../data/categories";

const AddNewCourseComponent = ({ navigation }) => {
  const { addCourse, courses } = useContext(CourseContext);

  const [courseData, setCourseData] = useState({
    id: generateCourseId(),
    categoryIds: [],
    title: "",
    backgroundUrl: "",
    logoUrl: "",
    header: "",
    description: "",
    content: "",
    moments: Array(6)
      .fill(null)
      .map((_, index) => ({
        videoOrder: index + 1,
        videoId: "",
        videoDescriptions: "",
        videoGoals: "",
      })),
  });

  const handleInputChange = (field, value) => {
    setCourseData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddCourse = () => {
    addCourse(courseData);
    setCourseData({
      id: generateCourseId(),
      categoryIds: [],
      title: "",
      backgroundUrl: "",
      logoUrl: "",
      header: "",
      description: "",
      content: "",
      moments: Array(6)
        .fill(null)
        .map((_, index) => ({
          videoOrder: index + 1,
          videoId: "",
          videoDescriptions: "",
          videoGoals: "",
        })),
    });
    navigation.navigate("Courses");
  };

  const handleAddCategory = (categoryId) => {
    setCourseData((prevData) => ({
      ...prevData,
      categoryIds: [...prevData.categoryIds, categoryId],
    }));
  };

  const isCategoryAdded = (categoryId) => {
    return courseData.categoryIds.includes(categoryId);
  };

  const renderCategories = () => {
    return CATEGORIES.map((category) => (
      <Button
        key={category.id}
        title={category.title}
        onPress={() => handleAddCategory(category.id)}
        color={isCategoryAdded(category.id) ? "green" : undefined}
      />
    ));
  };

  const handleMomentChange = (index, field, value) => {
    setCourseData((prevData) => {
      const moments = [...prevData.moments];
      moments[index] = { ...moments[index], [field]: value };
      return { ...prevData, moments };
    });
  };

  function generateCourseId() {
    let id;
    do {
      id = Math.floor(Math.random() * 10000);
    } while (courses.find((course) => course.id === id));
    return id;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Add New Course</Text>

      <Text style={styles.subheading}>Categories:</Text>
      <View style={styles.categoriesContainer}>{renderCategories()}</View>

      <TextInput
        style={styles.textInput}
        placeholder="Title"
        value={courseData.title}
        onChangeText={(text) => handleInputChange("title", text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Background URL"
        value={courseData.backgroundUrl}
        onChangeText={(text) => handleInputChange("backgroundUrl", text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Logo URL"
        value={courseData.logoUrl}
        onChangeText={(text) => handleInputChange("logoUrl", text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Header"
        value={courseData.header}
        onChangeText={(text) => handleInputChange("header", text)}
      />

      <Text style={styles.subheading}>Description:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Description"
        value={courseData.description}
        onChangeText={(text) => handleInputChange("description", text)}
        multiline
      />

      <Text style={styles.subheading}>Content:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Content"
        value={courseData.content}
        onChangeText={(text) => handleInputChange("content", text)}
        multiline
      />

      <Text style={styles.subheading}>Moments:</Text>
      {courseData.moments.map((moment, index) => (
        <View key={index}>
          <Text>Step {moment.videoOrder}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Video ID"
            value={moment.videoId}
            onChangeText={(text) => handleMomentChange(index, "videoId", text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Video Descriptions"
            value={moment.videoDescriptions}
            onChangeText={(text) =>
              handleMomentChange(index, "videoDescriptions", text)
            }
            multiline
          />
          <TextInput
            style={styles.textInput}
            placeholder="Video Goals"
            value={moment.videoGoals}
            onChangeText={(text) =>
              handleMomentChange(index, "videoGoals", text)
            }
            multiline
          />
        </View>
      ))}

      <Button
        style={styles.button}
        title="Add Course"
        onPress={handleAddCourse}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
});

export default AddNewCourseComponent;
