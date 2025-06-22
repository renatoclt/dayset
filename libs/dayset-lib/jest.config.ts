// libs/dayset-lib/jest.config.ts
export default {
  displayName: 'dayset-lib',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/dayset-lib',
  testMatch: ['**/*.spec.ts', '**/*.e2e.ts']
};
