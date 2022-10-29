
export type SidebarItem = {
	title?: string;
	to?: string;
	hasmenu?: boolean;
	isopennewtab?: boolean;
	iconclass?: string;
	permission: string;
	menuitems?: SidebarItem[];
}