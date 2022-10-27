import { NavLink, Link } from 'react-router-dom';
import React, {memo} from 'react';

export const SimpleLink = ({isOpenNewTab = false, to = "#", iconClass = "", children }: any) =>
	
	
	isOpenNewTab.isOpenNewTab ?
		<NewTabLink
			to={to}
			iconClass={iconClass}
			>{children}</NewTabLink> :

		<NormalLink
			>{children}</NormalLink>
;

const NewTabLink = (props: any) =>
	
	
	<a href={props.to}
		rel="noopener noreferrer"
		target="_blank"
		{...props} >
		<i className={props.iconClass} />
		{' '}{props.children}
	</a>;

const NormalLink = (props: any) =>
	
	<Link
		to={props.to}
		{...props} >
		<i className={props.iconClass}></i>
		{' '}{props.children}
	</Link>;