import React from 'react';
import {Sidebar} from "../../index";

export const SidebarTest = (props:any) => 

    <Sidebar menus={
            [
                {
                    title: "home",
                    hasmenu: true,
                    iconclass: "iconsminds-shop-4",
                    permission: "home-menu",
                    menuitems: [
                        {
                            title: "products",
                            to: "/test",
                            iconclass: "simple-icon-pie-chart",
                            permission: "products-page"
                        },
                        {
                            title: "category",
                            hasmenu: true,
                            to: "#",
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
                            to: "/cart",
                            iconclass: "simple-icon-briefcase",
                            isopennewtab: true,
                            permission: "cart-page"
                        },
                    ]
                },
                {
                    title: "dashboards",
                    hasmenu: true,
                    iconclass: "iconsminds-digital-drawing",
                    permission: "home-menu",
                    menuitems: [
                        {
                            title: "crypto",
                            permission: "products-page"
                        },
                        {
                            title: "currency",
                            hasmenu: true,
                            permission: "category-menu",
                            menuitems: [
                                {
                                    title: "blockchain",
                                    permission: "category-spring-page"
                                },
                                {
                                    title: "bitcoin",
                                    permission: "category-summer-page"
                                },
                                {
                                    title: "etherium",
                                    permission: "category-winter-page"
                                },
                            ]
                        },
                        {
                            title: "more",
                            isopennewtab: true,
                            permission: "cart-page"
                        },
                    ]
                }
            ]
        } />;