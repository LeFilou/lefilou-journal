import Sidebar from './Sidebar';
import { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Sidebar> = {
    title: 'Widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {};
Primary.args = {
    blogName: 'Salim Fliou',
    description: 'Journal',
    sidebarLinks: [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
    ],
};
