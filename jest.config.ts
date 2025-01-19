// jest.config.js
module.exports = {
  preset: 'ts-jest',           // <-- This is crucial
  testEnvironment: 'node',
  // If your tests are in the `__tests__` folder or something else, you might need "testMatch" or "testRegex"
  // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
