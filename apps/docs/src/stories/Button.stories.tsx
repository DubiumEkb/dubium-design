import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@dubium/ui";

import "../style.css";

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		onClick: { action: "clicked" },
		className: { control: "text" },
		type: {
			control: { type: "select" },
			options: ["button", "submit", "reset"],
		},
		role: { control: "text" },
		disabled: { control: "boolean" },
		stopPropagation: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Click me",
		type: "button",
		disabled: false,
		stopPropagation: false,
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled Button",
		disabled: true,
	},
};

export const SubmitType: Story = {
	args: {
		children: "Submit Form",
		type: "submit",
	},
};
