import { StoryObj } from '@storybook/react';
import PostSummary from './PostSummary';


const meta = {
    title: 'Modules/PostSummary',
    component: PostSummary,
    parameters: {
        layout: 'fullscreen',
        storyshots: true,
    },
};

export default meta;

type Story = StoryObj<typeof PostSummary>;

export const Primary: Story = {};
Primary.args = {
    title: "Dummy Article",
    publishedAt: '21 July 2023',
    summary: 'Consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper.'
};
