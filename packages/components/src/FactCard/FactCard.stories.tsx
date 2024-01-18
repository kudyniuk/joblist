import type { Meta, StoryObj } from "@storybook/react"

import { FactCard } from "./FactCard"

const meta: Meta<typeof FactCard> = {
  component: FactCard,
}

export default meta
type Story = StoryObj<typeof FactCard>

export const Story: Story = {
  args: {
    title: "97,354",
    description: "Companies",
  },
}
