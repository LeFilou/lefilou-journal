import type { Preview } from '@storybook/nextjs';
import { fontVariables } from '../styles/fonts';
import '../styles/globals.css';

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <div className={`${fontVariables} font-sans`}>
                <Story />
            </div>
        ),
    ],
};

export default preview;
