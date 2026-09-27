import { fontVariables } from '../styles/fonts';
import '../styles/globals.css';

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
        <div className={`${fontVariables} font-sans`}>
            <Story />
        </div>
    )
];
