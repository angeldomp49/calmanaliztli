import { NavLink, Link } from 'react-router-dom';
import React, {memo} from 'react';

export const SimpleLink = memo(({isOpenNewTab = false, to = "#", iconClass = "", onlyLink=false, children , ...additionalProps}: any) =>
	
	
	isOpenNewTab.isOpenNewTab ?
		<NewTabLink
			to={to}
			iconClass={iconClass}
			{...additionalProps}
			>{children}</NewTabLink> :

		<NormalLink
			to={to}
			iconClass={iconClass}
			onlyLink={onlyLink}
			{...additionalProps}
			>{children}</NormalLink>
);

const NewTabLink = ({to, iconClass, children, ...props}: any) =>
	
	
	<a href={to}
		rel="noopener noreferrer"
		target="_blank"
		{...props} >
		<i className={iconClass} />
		{' '}{children}
	</a>;

const NormalLink = ({to, iconClass, children, onlyLink, ...props}: any) =>

	onlyLink ? 
		<Link
			to={to}
			{...props} >
			<i className={iconClass}></i>
			{' '}{children}
		</Link>:
		<NavLink
			to={to}
			{...props} >
			<i className={iconClass}></i>
			{' '}{children}
		</NavLink>;