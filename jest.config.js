/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/_mocks_/logo-header.png',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  // transformIgnorePatterns: [
  //   'node_modules/(?!(react-native|my-project|react-native-button)/)',
  // ],
};
