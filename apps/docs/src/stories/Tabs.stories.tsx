import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "@dubium/ui";
import "../style.css";

const meta: Meta<any> = {
	title: "UI/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	argTypes: {
		onChange: { action: "tab changed" },
	},
};

export default meta;

const defaultTabs = [
	{ key: "home", label: "Главная" },
	{ key: "profile", label: "Профиль" },
	{ key: "settings", label: "Настройки" },
	{ key: "about", label: "О сайте" },
];

const Template: StoryFn<any> = (args) => <Tabs {...args} />;

export const DefaultTabs = {
	render: Template,
	args: {
		tabs: defaultTabs,
		isActive: defaultTabs[0].key,
		onChange: (tab) => console.log("Tab changed:", tab.key),
	},
};

export const EmptyTabs = {
	render: Template,
	args: {
		tabs: [],
		isActive: defaultTabs[0].key,
		onChange: (tab) => console.log("Tab changed:", tab.key),
	},
};
