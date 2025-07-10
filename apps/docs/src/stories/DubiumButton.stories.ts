import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Button, type ButtonProps } from "@dubium/ui";

const meta = {
	title: "Example/DubiumButton",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],

	argTypes: {
		type: {
			control: { type: "select" },
			options: ["button", "submit", "reset"],
		},
	},

	args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Button",
		type: "reset",
	},
};
