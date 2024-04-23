import { printBestStudents } from './8-seq';

describe('printBestStudents', () => {
  it('should filter and print best students with scores >= 70', () => {
    // Mock console.log
    console.log = jest.fn();

    // Test data
    const grades = {
      1: { score: 99, firstName: 'guillaume', lastName: 'salva' },
      2: { score: 60, firstName: 'john', lastName: 'doe' },
      3: { score: 80, firstName: 'emma', lastName: 'smith' },
    };

    // Call the function
    printBestStudents(grades);

    // Verify that the correct students were printed
    expect(console.log).toHaveBeenCalledWith('"1":', {
      score: 99,
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
    expect(console.log).toHaveBeenCalledWith('"3":', {
      score: 80,
      firstName: 'Emma',
      lastName: 'Smith',
    });

    // Verify that incorrect students were not printed
    expect(console.log).not.toHaveBeenCalledWith('"2":', {
      score: 60,
      firstName: 'John',
      lastName: 'Doe',
    });
  });
});
