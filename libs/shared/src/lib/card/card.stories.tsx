import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary = {
  args: {
    children: 'Content',
  },
};
