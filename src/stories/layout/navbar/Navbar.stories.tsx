import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navbar> = {
  title: "Brytzone/Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {

};

export const Secondary: Story = {
  args: {
    // label: "Navbar",
  },
};

export const Large: Story = {
  args: {
    // size: "large",
    // label: "Navbar",
  },
};

export const Small: Story = {
  args: {
    // size: "small",
    // label: "Navbar",
  },
};
