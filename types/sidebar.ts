import React from "react";

export type Settings = {
    sidebaritems: SidebarItem[];
};

export type SidebarItem = {
	title?: string;
	to?: string;
	hasmenu?: boolean;
	isopennewtab?: boolean;
	iconclass?: string;
	permission: string;
	menuitems?: SidebarItem[];
}