import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarLeft } from "./NavbarLeft";
import { NavbarRight } from "./NavbarRight";

export const TopNav = ({ }: any) => {

	return (
		<nav className="navbar fixed-top">
			<NavbarLeft />
			<NavbarCenter />
			<NavbarRight />
		</nav>
	);
};

const NavbarCenter = (props: any) =>
	<NavLink className="navbar-logo" to="/">
		<span className="logo d-none d-xs-block" />
		<span className="logo-mobile d-block d-xs-none" />
	</NavLink>


