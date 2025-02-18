declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.scss" {
	const style: { [className: string]: string };
	export default style;
}

declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.css" {
	const style: { [className: string]: string };
	export default style;
}
