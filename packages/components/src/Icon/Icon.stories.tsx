import type { Meta, StoryObj } from "@storybook/react"

import { Icon } from "./Icon"

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const Buildings: Story = {
  args: {
    name: "Buildings",
  },
}

export const Briefcase: Story = {
  args: {
    name: "Briefcase",
  },
}

export const Users: Story = {
  args: {
    name: "Users",
  },
}
