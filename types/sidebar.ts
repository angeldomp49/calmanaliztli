
export type Settings = {
    sidebarItems: SidebarItem[];
};

export type SidebarItem = {
	title?: string;
	to?: string;
	hasMenu: boolean;
	isOpenNewTab?: boolean;
	iconClass?: string;
	permission: string;
	menuItems?: SidebarItem[];
}