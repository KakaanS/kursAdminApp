import React, { createContext, useContext, useState } from "react";
import defaultCourses from "../data/Courses";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(defaultCourses);

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export { CourseProvider, CourseContext };
