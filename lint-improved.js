/**
 * Adds two numbers together
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @throws {TypeError} When parameters are not numbers
 */
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both parameters must be numbers')
  }
  return a + b
}

// Example usage
console.log(add(2, 3)) // Output: 5

// Export for use in other modules
module.exports = { add }