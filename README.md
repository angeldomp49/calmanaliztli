
[development](/documentation/development.md)

## Links ### 

## SimpleLink ## 

    import {SimpleLink} from '@makechtec/calmanaliztli';

    <SimpleLink
        to={"/products"}
        iconClass={"fa fa-search"}
        isOpenNewTab > // to open in a new tab.
        see all products</SimpleLink> 

It contains three attributes:

to: the target link address.
iconClass: the i class.
isOpenNewTab: it's a boolean to open in a new tab.

This component use React Router Dom NavLink internally, then it must be used inside it.

## DropdownButton ## 

Really it can be a dropdown button, it depends on it has menu items.

Example of dropdown button with menu items:

    import {DropdownButton} from '@makechtec/calmanaliztli';

    <DropdownButton
        hasSubItems
        links={moreLinks}
        iconClass="fa fa-cart"
    >
        cart
    </DropdownButton>

Example of dropdown button but without menu items:

    import {DropdownButton} from '@makechtec/calmanaliztli';

    <DropdownButton
        to="/cart"
        iconClass="fa fa-cart"
    >
        cart
    </DropdownButton>

## Sidebar ##

Sidebar component, it receives an array of SidebarItem.

Example: 

    import {Sidebar} from '@makechtec/calmanaliztli';
    import {SidebarItem} from '@makechtec/calmanaliztli/types/sidebar';

    const sidebaritems: SidebarItem[] = [
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
        ];

    return(
        <Sidebar menus={sidebaritems} />
    );