import React, { useContext, useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CATEGORIES from "../data/categories";

const CourseFilter = ({ courses, navigation, setFilteredCourses }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  /* 
  const handleCoursePress = (course) => {
    navigation.navigate("SpecificScreen", { course: course });
  }; */

  const handleCategorySelect = (categoryId) => {
    const updatedCategory = [...selectedCategory];

    if (updatedCategory.includes(categoryId)) {
      updatedCategory.splice(updatedCategory.indexOf(categoryId), 1);
    } else {
      updatedCategory.push(categoryId);
    }
    setSelectedCategory(updatedCategory);
  };

  const isCategorySelected = (categoryId) => {
    return selectedCategory.includes(categoryId);
  };

  const applyFilters = () => {
    toggleModal();
    setFilteredCourses(filteredCourses);
  };

  const filteredCourses =
    selectedCategory && selectedCategory.length > 0
      ? courses.filter((course) => {
          return selectedCategory.some((categoryId) =>
            course.categoryIds.includes(categoryId)
          );
        })
      : courses;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons>
          <Item
            title="Filter"
            iconName="filter-outline"
            onPress={applyFilters}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, applyFilters]);

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleModal}>
        <Text style={styles.heading}>Showing categories:</Text>
        <View style={styles.selectedCategory}>
          {selectedCategory.length > 0 ? (
            selectedCategory.map((categoryId) => (
              <Text key={categoryId} style={styles.selectedCategory}>
                {
                  CATEGORIES.find((category) => category.id === categoryId)
                    ?.title
                }
              </Text>
            ))
          ) : (
            <Text style={styles.selectedCategory}>All</Text>
          )}
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <HeaderButtons>
            <Item title="Apply" onPress={applyFilters} />
          </HeaderButtons>

          {CATEGORIES.map((category) => (
            <Pressable
              key={category.id}
              style={[
                styles.categoryButton,
                isCategorySelected(category.id) &&
                  styles.selectedCategoryButton,
              ]}
              onPress={() => handleCategorySelect(category.id)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  isCategorySelected(category.id) &&
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
