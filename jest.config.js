/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  roots: ['<rootDir>/src/'],
  resolver: 'ts-jest-resolver',
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec.ts)'],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsConfig: 'tsconfig.json',
        useESM: true,
      },
    ],
  },
};
