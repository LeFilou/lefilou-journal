import { globSync } from 'node:fs';
import path from 'node:path';
import { ComponentType } from 'react';
import { render } from '@testing-library/react';

interface Story {
    args?: object;
}

interface StoryFile {
    default: { component: ComponentType; args?: object };
    [name: string]: Story;
}

const storyFiles = globSync('components/**/*.stories.tsx', { cwd: __dirname });

describe.each(storyFiles)('%s', (file) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { default: meta, ...stories }: StoryFile = require(
        path.join(__dirname, file),
    );

    it.each(Object.entries(stories))('%s renders', (_name, story) => {
        const { container } = render(
            <meta.component {...meta.args} {...story.args} />,
        );
        expect(container.firstChild).not.toBeNull();
    });
});
