import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@dubium/ui";

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		onClick: {
			action: "clicked",
			description: "Функция, вызываемая при клике на кнопку.",
		},
		className: {
			control: "text",
			description: "Дополнительный CSS-класс.",
		},
		type: {
			control: { type: "select" },
			options: ["button", "submit", "reset"],
			description: "HTML-тип кнопки.",
		},
		role: {
			control: "text",
			description: "ARIA-роль кнопки (если требуется).",
		},
		disabled: {
			control: "boolean",
			description: "Отключает кнопку.",
		},
		stopPropagation: {
			control: "boolean",
			description: "Останавливает всплытие события клика.",
		},
	},
	args: {
		type: "button",
		disabled: false,
		stopPropagation: false,
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Click me",
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
