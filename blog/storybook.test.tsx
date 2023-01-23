/* eslint-disable @typescript-eslint/ban-ts-comment */

import initStoryshots, {
    multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

import * as serializer from '@emotion/jest/serializer';
import { addSerializer } from 'jest-specific-snapshot';

// Prevents SVG titleId errors from being spammed in the log
beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore jest.spyOn adds this functionallity
    console.error.mockImplementationOnce(() => null);
});

afterEach(() => {
    // @ts-ignore jest.spyOn adds this functionallity
    console.error.mockRestore();
});

/**
 * `jest-specific-snapshot` doesn't pickup the serializer from jest config so we need to add it here
 * @see https://github.com/storybookjs/storybook/issues/887#issuecomment-357073807
 */
addSerializer(serializer);

initStoryshots({
    test: multiSnapshotWithOptions({
        renderer: (component: any) => render(component).container.firstChild,
    }),
});