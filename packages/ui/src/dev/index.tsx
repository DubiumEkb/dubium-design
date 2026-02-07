import { useMemo, useState } from "react";
import { Button } from "../components/Button/Button";
import { Tabs, type ITab } from "../components/Tabs/Tabs";

enum ETabs {
	HOME = "Home",
	PROFILE = "Profile",
	SETTINGS = "Settings",
}

export const App = () => {
	const [activeTab, setActiveTab] = useState<ETabs>(ETabs.HOME);

	const tabs = useMemo(
		() => [
			{
				key: ETabs.HOME,
				label: "Главная",
			},
			{
				key: ETabs.PROFILE,
				label: "Профиль",
			},
			{
				key: ETabs.SETTINGS,
				label: "Настройки",
			},
		],
		[],
	);

	return (
		<>
			<Button>Qwerty</Button>
			<Tabs
				tabs={tabs}
				isActive={activeTab}
				onChange={(tab: ITab<ETabs>) => {
					setActiveTab(tab.key);
				}}
			/>

			{activeTab === ETabs.HOME ? <>HOME</> : null}
			{activeTab === ETabs.PROFILE ? <>PROFILE</> : null}
			{activeTab === ETabs.SETTINGS ? <>SETTINGS</> : null}
		</>
	);
};
