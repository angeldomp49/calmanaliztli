import React from 'react';
import { NavLink } from 'reactstrap';
import MenuIcon from './svg/MenuIcon';
import MobileMenuIcon from './svg/MobileMenuIcon';
import { Searchbar } from '../Searchbar';
import { LocaleSwitcher } from '../LocaleSwitcher';

export const NavbarLeft = ({ toggleAction = () => {}, onSearchSubmit = () => {} }: any) =>
    <div className="d-flex align-items-center navbar-left">
        <ToggleButton toggleAction={toggleAction} />
        <Searchbar
            placeholder="Search"
            onSubmit={onSearchSubmit} />
        <LocaleSwitcher localeOptions={["EN", "ES"]} />
    </div>

const ToggleButton = ({ toggleAction = () => { }, isMobile = false }: any) =>

    isMobile ?
        <NavLink
            to="#"
            className="menu-button-mobile"
            onClick={toggleAction}
        >
            <MobileMenuIcon />
        </NavLink> :
        <NavLink
            to="#"
            className="menu-button"
            onClick={toggleAction}
        >
            <MenuIcon />
        </NavLink>

const CTAButton = ({ to = "#", children, ...props }: any) =>
    <div className="position-relative d-none d-lg-inline-block">
        <a
            className="btn btn-outline-primary btn-sm ml-2"
            target="_top"
            href={to}
            {...props}
        >
            {children}
        </a>
    </div>

// const menuButtonClick = (e, _clickCount, _conClassnames) => {
//     e.preventDefault();

//     setTimeout(() => {
//         const event = document.createEvent('HTMLEvents');
//         event.initEvent('resize', false, false);
//         window.dispatchEvent(event);
//     }, 350);
//     setContainerClassnamesAction(
//         _clickCount + 1,
//         _conClassnames,
//         selectedMenuHasSubItems
//     );
// };

// const mobileMenuButtonClick = (e, _containerClassnames) => {
//     e.preventDefault();
//     clickOnMobileMenuAction(_containerClassnames);
// };