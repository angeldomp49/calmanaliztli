import React from 'react';
import {Switch} from '../Switch';
import {ProfileMenu} from '../ProfileMenu';
import { DropdownItem } from 'reactstrap';
import {FullScreenButton} from '../FullScreenButton';
import { EasyAccess } from '../EasyAccess';
import { NotificationsMenu } from './NotificationsMenu';

export const NavbarRight = ({ isDarkSwitchActive=false }: any) =>
    <div className="navbar-right">
        {isDarkSwitchActive && <Switch />}
        
        <div className="header-icons d-inline-block align-middle">
            <EasyAccess menuItems={[
                {
                    title: "",
                    to: "",
                    iconclass: "iconsminds-pantone d-block"
                },
                {
                    title: "",
                    to: "",
                    iconclass: "iconsminds-bar-chart-4 d-block"
                },
                {
                    title: "",
                    to: "",
                    iconclass: "iconsminds-speach-bubble d-block"
                },
                {
                    title: "",
                    to: "",
                    iconclass: "iconsminds-formula d-block"
                }
            ]} />
            <NotificationsMenu />
            <FullScreenButton />
        </div>

        <ProfileMenu text="Angel Dominguez" imageurl="src/assets/img/profiles/l-1.jpg" >
            <DropdownItem>Account</DropdownItem>
            <DropdownItem>Features</DropdownItem>
            <DropdownItem>History</DropdownItem>
            <DropdownItem>Support</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => {}}>
                Sign out
            </DropdownItem>
        </ProfileMenu>
    </div>
