module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      "@Api/(.*)": "<rootDir>/src/Api/$1",
      "@Shared/(.*)": "<rootDir>/src/Contexts/Shared/$1",
      "@Movement/(.*)": "<rootDir>/src/Contexts/Movement/$1",
      "@Wod/(.*)": "<rootDir>/src/Contexts/Wod/$1",
      "@Tests/(.*)": "<rootDir>/tests/$1",
    }
  };