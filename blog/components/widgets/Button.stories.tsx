import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Button' };