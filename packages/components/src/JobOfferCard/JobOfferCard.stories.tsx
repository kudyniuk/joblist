import type { Meta, StoryObj } from '@storybook/react';

import { JobOfferCard } from './JobOfferCard';

const meta: Meta<typeof JobOfferCard> = {
  component: JobOfferCard,
};

export default meta;
type Story = StoryObj<typeof JobOfferCard>;

export const Story: Story = {
  args: {
    name: "Techical Support Specialist",
    type: "Part-Time",
    salaryFrom: 20000,
    salaryTo: 25000,
    company: {
      id: 1,
      name: "Google Inc",
      address: "Krakow, Poland"
    }
  },
};