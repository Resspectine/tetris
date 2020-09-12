module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  modulePaths: ['<rootDir>/src/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
