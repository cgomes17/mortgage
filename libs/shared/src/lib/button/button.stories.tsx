import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

const defaultText = 'Click Me!';

export const Default = {
  args: {
    children: defaultText,
  },
};

export const Secondary: Story = {
  args: {
    colour: 'secondary',
    children: defaultText,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(defaultText)).toBeTruthy();
  },
};
