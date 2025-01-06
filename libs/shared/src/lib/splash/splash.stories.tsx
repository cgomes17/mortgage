import type { Meta, StoryObj } from '@storybook/react';
import { Splash } from './splash';

const meta: Meta<typeof Splash> = {
  component: Splash,
  title: 'Splash',
};
export default meta;
type Story = StoryObj<typeof Splash>;

export const Primary = {
  args: {
    children: '',
  },
};
