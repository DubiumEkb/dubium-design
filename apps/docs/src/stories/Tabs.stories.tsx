import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@dubium/ui";

const meta: Meta<typeof Tabs> = {
	title: "UI/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	argTypes: {
		onChange: { action: "tab changed" },
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Пример набора вкладок
const defaultTabs: any[] = [
	{ key: "home", label: "Главная" },
	{ key: "profile", label: "Профиль" },
	{ key: "settings", label: "Настройки" },
	{ key: "about", label: "О сайте" },
];

// Обертка для Default, где можно использовать хуки
const DefaultTabsStory = (args: any) => {
	const [active, setActive] = React.useState(
		args.isActive || defaultTabs[0].key
	);

	return (
		<Tabs
			{...args}
			tabs={args.tabs || defaultTabs}
			isActive={active}
			onChange={(tab) => {
				setActive(tab.key);
			}}
		/>
	);
};

export const Default: Story = {
	render: (args) => <DefaultTabsStory {...args} />,
	args: {
		tabs: defaultTabs,
		isActive: defaultTabs[0].key,
	},
};

// Обертка для ManyTabs
const ManyTabsStory = () => {
	const manyTabs: any[] = Array.from({ length: 15 }, (_, i) => ({
		key: `tab-${i + 1}`,
		label: `Вкладка ${i + 1}`,
	}));
	const [active, setActive] = React.useState(manyTabs[0].key);

	return (
		<Tabs
			tabs={manyTabs}
			isActive={active}
			onChange={(tab) => {
				setActive(tab.key);
			}}
		/>
	);
};

export const ManyTabs: Story = {
	render: () => <ManyTabsStory />,
};

// Обертка для EmptyTabs
const EmptyTabsStory = () => {
	const [active, setActive] = React.useState("");
	return (
		<Tabs
			tabs={[]}
			isActive={active}
			onChange={(tab) => {
				setActive(tab.key);
			}}
		/>
	);
};

export const EmptyTabs: Story = {
	render: () => <EmptyTabsStory />,
};
