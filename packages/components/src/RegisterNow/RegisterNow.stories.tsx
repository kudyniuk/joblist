import type { Meta, StoryObj } from '@storybook/react';

import { RegisterNow } from './RegisterNow';

const meta: Meta<typeof RegisterNow> = {
  component: RegisterNow,
};

export default meta;
type Story = StoryObj<typeof RegisterNow>;

export const Candidate: Story = {
  args: {
    title: "Become a Candidate",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.",
    className: 'bg-stone-100'
  },
};

export const Employer: Story = {
  args: {
    title: "Become a Employer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.",
    className: 'bg-neutral-300'
  },
};