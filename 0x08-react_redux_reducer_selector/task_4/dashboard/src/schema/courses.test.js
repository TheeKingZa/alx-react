// src/schema/courses.test.js

// Import the coursesNormalizer function from the courses file
import coursesNormalizer from "./courses";

// Describe block for the courses normalizer tests
describe("courses normalizer tests", function () {
  // Test to verify that the data is normalized correctly
  it("Should normalize data", function () {
    // Sample data of courses
    const courses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    // Expected result after normalization
    const expectedResult = {
      1: { id: 1, name: "ES6", credit: 60 },
      2: { id: 2, name: "Webpack", credit: 20 },
      3: { id: 3, name: "React", credit: 40 },
    };

    // Call the coursesNormalizer function with the sample data
    const normalizedData = coursesNormalizer(courses);

    // Expect the normalized data to match the expected result
    expect(normalizedData).toEqual(expectedResult);
  });
});
