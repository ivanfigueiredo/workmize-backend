/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {

  bail: true,

  preset: 'ts-jest',

  testEnvironment: 'node',

  testMatch: [
    "**/__tests__/**/*.test.ts?(x)"
  ]
};