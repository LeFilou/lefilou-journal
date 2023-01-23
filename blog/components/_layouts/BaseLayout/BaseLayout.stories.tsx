import { Meta, Story } from '@storybook/react';

import BaseLayout, { BaseLayoutProps } from './BaseLayout';

export default {
    title: 'Layouts/BaseLayout',
    component: BaseLayout,
    parameters: {
        layout: 'fullscreen',
        storyshots: false,
    },
} as Meta;

const Template: Story<BaseLayoutProps> = (args) => <BaseLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: <div>Content</div>,
};
