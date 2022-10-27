import { Settings } from "../index.js";

export const settings: Settings = {

    sidebarItems: [
        {
            title: "home",
            hasMenu: true,
            iconClass: "",
            permission: "home-menu",
            menuItems: [
                {
                    title: "products",
                    hasMenu: false,
                    iconClass: "fa fa-plus-square",
                    permission: "products-page"
                },
                {
                    title: "category",
                    hasMenu: true,
                    iconClass: "fa fa-plus-square",
                    permission: "category-menu",
                    menuItems: [
                        {
                            title: "spring",
                            hasMenu: false,
                            iconClass: "fa fa-plus-square",
                            permission: "category-spring-page"
                        },
                        {
                            title: "summer",
                            hasMenu: false,
                            iconClass: "fa fa-plus-square",
                            permission: "category-summer-page"
                        },
                        {
                            title: "winter",
                            hasMenu: false,
                            iconClass: "fa fa-plus-square",
                            permission: "category-winter-page"
                        },
                    ]
                },
                {
                    title: "cart",
                    hasMenu: false,
                    isOpenNewTab: true,
                    iconClass: "fa fa-plus-square",
                    permission: "cart-page"
                },
            ]
        }
    ]
};