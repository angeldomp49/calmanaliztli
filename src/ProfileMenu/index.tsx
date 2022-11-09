import React from 'react';
import { DropdownToggle, DropdownMenu, UncontrolledDropdown } from 'reactstrap';

export const ProfileMenu = ({text="", imageurl="", children} : any) => 
    <div className="user d-inline-block">
        <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
                <span className="name mr-1">{text}</span>
                <span>
                    <img alt="Profile" src={imageurl} />
                </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" end>
                {children}
            </DropdownMenu>
        </UncontrolledDropdown>
    </div>