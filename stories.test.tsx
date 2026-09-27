import { globSync } from 'node:fs';
import path from 'node:path';
import { ComponentType } from 'react';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

type StoryFile = Parameters<typeof composeStories>[0];

const storyFiles = globSync('components/**/*.stories.tsx', { cwd: __dirname });

describe.each(storyFiles)('%s', (file) => {
    const stories: [string, ComponentType][] = Object.entries(
        composeStories(require(path.join(__dirname, file)) as StoryFile),
    );

    it.each(stories)('%s renders', (_name, Story) => {
        const { container } = render(<Story />);
        expect(container.firstChild).not.toBeNull();
    });
});
