module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
        '<rootDir>[/\\\\](node_modules|.next|cypress|.storybook)[/\\\\]',
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>[/\\\\](node_modules|.next|cypress|.storybook)[/\\\\]',
    ],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/src/__mocks__/svgMock.tsx',
        // Mocks out all these file formats when tests are run
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'identity-obj-proxy',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ['@emotion/jest/serializer'],
};