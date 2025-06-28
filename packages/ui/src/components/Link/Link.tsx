import type { ReactNode } from "react";
import style from "./Link.module.scss";

export const Link = ({ children }: { children: ReactNode }) => {
	return <button className={style.link}>{children}</button>;
};
