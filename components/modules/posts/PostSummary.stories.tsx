import { StoryObj } from '@storybook/nextjs';
import PostSummary from './PostSummary';

const meta = {
    title: 'Modules/PostSummary',
    component: PostSummary,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof PostSummary>;

export const Primary: Story = {};
Primary.args = {
    title: 'Dummy Article',
    publishedAt: '2023-07-21T09:00:00Z',
    slug: 'dummy-article',
    summary:
        'Consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper.',
};
