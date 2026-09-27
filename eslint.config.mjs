import js from '@eslint/js';
import nextConfig from 'eslint-config-next';
import tseslint from 'typescript-eslint';

const config = [
    {
        ignores: [
            '.next/',
            'out/',
            'storybook-static/',
            'studio/',
            'next-env.d.ts',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...nextConfig,
    { rules: { 'no-undef': 'off' } },
    {
        files: ['**/*.js'],
        rules: { '@typescript-eslint/no-require-imports': 'off' },
    },
];

export default config;
