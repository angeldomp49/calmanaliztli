
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


## ContextMenu ##

    import React from 'react';
    import './App.css';
    import { Grid } from './components/Grid';
    import { Card } from './components/Card';
    import { ContextMenuChildListener, ContextMenuParentListener } from './components/ContextMenu';
    import {Id} from '@makechtec/randomkey';

    function App() {

    let items = [
        {
        content: <div>hello div</div>
        },
        {
        content: "hello world 1"
        },
        {
        content: "hello world 2"
        },
        {
        content: "hello world 3"
        },
        {
        content: "hello world 4"
        },
        {
        content: "hello world 5"
        },
        {
        content: "hello world 6"
        },
        {
        content: "hello world 7"
        },
        {
        content: "hello world 8"
        },
        {
        content: "hello world 9"
        }
    ];

    return (
        <div className="App">
        <ContextMenuParentListener
            createMenu={ (bagInfo: any) =>
            <ul>
                <li>{bagInfo.content}</li>
                <li>option2</li>
                <li>option3</li>
                <li>option4</li>
            </ul>
            }
        >
            <Grid cols={5} gap={2}>
            {
                items.map( (item: any) => 
                <ContextMenuChildListener 
                    key={Id.generate()} 
                    bagInfo={{content: item.content}}
                > 
                    <Card>
                    {item.content}
                    </Card>
                </ContextMenuChildListener>)
            }
            </Grid>
        </ContextMenuParentListener>
        </div>
    );
    }
