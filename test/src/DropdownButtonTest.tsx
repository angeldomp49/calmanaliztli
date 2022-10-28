import React from 'react';
import {DropdownButton} from "../../index";
import { SidebarItem } from '../../types/sidebar';


export const DropdownButtonTestLinks = (props:any) => {

    const subItems: SidebarItem[] = [
        {
            permission: "link-1",
            title: "Link 1",
            to:"#"
        },
        {
            permission: "link-2",
            title: "Link 2"
        }
    ];

    return(
        <DropdownButton hasSubItems links={subItems}>with more links</DropdownButton>
    );
}

export const DropdownButtonTest2 = (props:any) => {

    return(
        <DropdownButton>dropdown withoutInfo</DropdownButton>
    );
}