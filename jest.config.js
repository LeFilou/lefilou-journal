const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/(node_modules|.next|.storybook)/'],
    coveragePathIgnorePatterns: ['<rootDir>/(node_modules|.next|.storybook)/'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    moduleNameMapper: {
        '^@/(components|model|styles)/(.*)$': '<rootDir>/$1/$2',
    },
});
