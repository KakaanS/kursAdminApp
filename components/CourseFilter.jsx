import react, { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

// support imports
import { CATEGORIES } from "../data/categories";

const CourseFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filter by Category:</Text>
      {CATEGORIES &&
        CATEGORIES.map((category) => (
          <Pressable
            key={category.id}
            style={[
              styles.categoryButton,
              category.id === selectedCategory && styles.selectedCategoryButton,
            ]}
            onPress={() => onSelectCategory(category.id)}
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
  categoryButton: {
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  selectedCategoryButton: {
    backgroundColor: "#007BFF", // Change the color to your preferred selected category color
  },
  categoryButtonText: {
    fontSize: 14,
    color: "#333333",
  },
  selectedCategoryButtonText: {
    color: "#FFFFFF", // Change the color to your preferred selected category text color
  },
});
