import { createContext, useContext } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

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
