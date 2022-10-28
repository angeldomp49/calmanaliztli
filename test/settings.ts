import { Settings } from "../types/sidebar";

export const settings: Settings = {

    sidebaritems: [
        {
            title: "home",
            hasmenu: true,
            iconclass: "",
            permission: "home-menu",
            menuitems: [
                {
                    title: "products",
                    hasmenu: false,
                    iconclass: "fa fa-plus-square",
                    permission: "products-page"
                },
                {
                    title: "category",
                    hasmenu: true,
                    iconclass: "fa fa-plus-square",
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