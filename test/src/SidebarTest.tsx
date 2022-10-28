import React from 'react';
import {Sidebar} from "../../index";
import { Settings } from '../../types/sidebar';


export const SidebarTest = (props:any) => {

    const sidebar: Settings = {
        sidebaritems: [
            {
                title: "home",
                hasmenu: true,
                permission: "home-menu",
                menuitems: [
                    {
                        title: "products",
                        permission: "products-page"
                    },
                    {
                        title: "category",
                        hasmenu: true,
                        permission: "category-menu",
                        menuitems: [
                            {
                                title: "spring",
                                permission: "category-spring-page"
                            },
                            {
                                title: "summer",
                                permission: "category-summer-page"
                            },
                            {
                                title: "winter",
                                permission: "category-winter-page"
                            },
                        ]
                    },
                    {
                        title: "cart",
                        isopennewtab: true,
                        permission: "cart-page"
                    },
                ]
            },
            {
                title: "home",
                hasmenu: true,
                permission: "home-menu",
                menuitems: [
                    {
                        title: "products",
                        permission: "products-page"
                    },
                    {
                        title: "category",
                        hasmenu: true,
                        permission: "category-menu",
                        menuitems: [
                            {
                                title: "spring",
                                permission: "category-spring-page"
                            },
                            {
                                title: "summer",
                                permission: "category-summer-page"
                            },
                            {
                                title: "winter",
                                permission: "category-winter-page"
                            },
                        ]
                    },
                    {
                        title: "cart",
                        isopennewtab: true,
                        permission: "cart-page"
                    },
                ]
            }
        ]
    };

    return(
        <Sidebar menus={sidebar.sidebaritems} />
    );
    
};