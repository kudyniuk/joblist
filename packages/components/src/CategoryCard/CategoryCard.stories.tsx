import type { Meta, StoryObj } from '@storybook/react';

import { CategoryCard } from './CategoryCard';

const meta: Meta<typeof CategoryCard> = {
  component: CategoryCard,
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Story: Story = {
  args: {
    title: "Graphics & Design",
    description: "357 Open position"
  },
};