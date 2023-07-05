import React, { useContext, useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CATEGORIES from "../data/categories";

const CourseFilter = ({ courses, navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCoursePress = (course) => {
    navigation.navigate("SpecificScreen", { course: course });
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    toggleModal();
  };

  const filteredCourses =
    selectedCategory && selectedCategory !== "all"
      ? courses.filter((course) =>
          course.categoryIds.includes(selectedCategory)
        )
      : courses;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons>
          <Item
            title="filter"
            iconName="filter-outline"
            onPress={toggleModal}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, toggleModal]);

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleModal}>
        <Text style={styles.heading}>Showing category:</Text>
        <Text style={styles.selectedCategory}>
          {selectedCategory ? selectedCategory : "All"}
        </Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <HeaderButtons>
            <Item
              title="filter"
              iconName="filter-outline"
              onPress={() => {
                handleCategorySelect(null);
              }}
            />
          </HeaderButtons>

          {CATEGORIES.map((category) => (
            <Pressable
              key={category.id}
              style={[
                styles.categoryButton,
                category.id === selectedCategory &&
                  styles.selectedCategoryButton,
              ]}
              onPress={() => handleCategorySelect(category.id)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  category.id === selectedCategory &&
                    styles.selectedCategoryButtonText,
                ]}
              >
                {category.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default CourseFilter;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  selectedCategory: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },
  categoryButton: {
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedCategoryButton: {
    backgroundColor: "#007BFF",
  },
  categoryButtonText: {
    fontSize: 14,
    color: "#333333",
  },
  selectedCategoryButtonText: {
    color: "#FFFFFF",
  },
});
