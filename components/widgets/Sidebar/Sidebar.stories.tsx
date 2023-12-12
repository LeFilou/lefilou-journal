import Sidebar from './Sidebar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
    title: 'Widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
        storyshots: true,
    },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {};
Primary.args = {
    blogName: 'Lefilou',
    blogAuthor: 'Salim Fliou',
    description: "Lefilou's personnal journal",
    sidebarLinks: [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
    ],
};
