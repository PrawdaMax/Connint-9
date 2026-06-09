const add = require('./math'); // Import the function

// 'describe' groups related tests together
describe('Math Functions Suite', () => {

  // 'test' (or 'it') defines an individual test case
  test('should correctly add two positive numbers', () => {
    
    // Arrange & Act
    const result = add(2, 3);
    
    // Assert: We expect the result to be exactly 5
    expect(result).toBe(5);
  });

  test('should correctly handle negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });
  
});