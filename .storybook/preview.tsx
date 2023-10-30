import createCache from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/react';
import GlobalStyles from '../styles/GlobalStyles';

const cache = createCache({
    prepend: true,
    key: 'app',
    // This disables vendor prefixing in storybook and storyshots snapshots
    ...((process.env.NODE_ENV === 'development' || 'test') && {
        stylisPlugins: [],
    }),
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ['Layouts'],
        },
    }
};

export const decorators = [
    (Story) => (
        <CacheProvider value={cache}>
            <GlobalStyles />
            <Global styles={{ html: { scrollBehavior: 'smooth' } }} />
            <Story />
        </CacheProvider>
    )
];
