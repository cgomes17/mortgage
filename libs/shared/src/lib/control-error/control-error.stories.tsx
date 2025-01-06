import type { Meta, StoryObj } from '@storybook/react';
import { ControlError } from './control-error';

const meta: Meta<typeof ControlError> = {
  component: ControlError,
  title: 'ControlError',
};
export default meta;
type Story = StoryObj<typeof ControlError>;

export const Primary = {
  args: {
    error: '',
  },
};
