import { NavLink } from 'react-router-dom';
import React, {memo} from 'react';

export const SimpleLink = memo(({isOpenNewTab = false, to = "#", iconClass = "", children , ...additionalProps}: any) =>
	
	
	isOpenNewTab.isOpenNewTab ?
		<NewTabLink
			to={to}
			iconClass={iconClass}
			{...additionalProps}
			>{children}</NewTabLink> :

		<NormalLink
			{...additionalProps}
			>{children}</NormalLink>
);

const NewTabLink = (props: any) =>
	
	
	<a href={props.to}
		rel="noopener noreferrer"
		target="_blank"
		{...props} >
		<i className={props.iconClass} />
		{' '}{props.children}
	</a>;

const NormalLink = (props: any) =>
	
	<NavLink
		to={props.to}
		{...props} >
		<i className={props.iconClass}></i>
		{' '}{props.children}
	</NavLink>;