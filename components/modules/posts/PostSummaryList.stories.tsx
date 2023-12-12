import { StoryObj } from '@storybook/react';
import PostSummaryList from './PostSummaryList';

const meta = {
    title: 'Modules/PostSummaryList',
    component: PostSummaryList,
    parameters: {
        layout: 'fullscreen',
        storyshots: true,
    },
};

export default meta;

type Story = StoryObj<typeof PostSummaryList>;

export const Primary: Story = {};
Primary.args = {
    posts: [
        {
            title: 'Lorem Ipsum',
            summary:
                'Consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus ' +
                'accumsan tortor posuere ac ut consequat semper.',
            slug: 'lorem-ipsum',
            createdAt: '2023-01-24T14:03:47Z',
        },
        {
            title: 'Dolor Sit Amet',
            summary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Aliquam ' +
                'eleifend mi in nulla posuere.',
            slug: 'lorem-ipsum',
            createdAt: '2023-01-24T14:03:47Z',
        }
    ],
};
