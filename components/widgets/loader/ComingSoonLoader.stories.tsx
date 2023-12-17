import { Meta, StoryObj } from '@storybook/react';
import ComingSoonLoader from './ComingSoonLoader';

const meta: Meta<typeof ComingSoonLoader> = {
    title: 'Loader/ComingSoon',
    component: ComingSoonLoader,
    parameters: {
        layout: 'fullscreen',
        storyshots: true,
    },
};

export default meta;

type Story = StoryObj<typeof ComingSoonLoader>;

export const Primary: Story = {};
