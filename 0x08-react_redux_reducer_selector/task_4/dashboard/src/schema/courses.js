// src/schema/courses.js

// Import the normalize and schema functions from the normalizr library
import { normalize, schema } from "normalizr";

// Define a schema entity for courses
const courses = new schema.Entity("courses");

// Function to normalize courses data
const coursesNormalizer = (data) => {
  // Normalize the data using the defined schema
  const normalizedData = normalize(data, [courses]);

  // Return the normalized courses entities
  return normalizedData.entities.courses;
};

// Export the coursesNormalizer function
export default coursesNormalizer;
