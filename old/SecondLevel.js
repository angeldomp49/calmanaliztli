import { SimpleLink, NewTabLink } from "./Links";
import IntlMessages from '../../helpers/IntlMessages';
import { NavLink, Nav, NavItem } from 'react-router-dom';
import { Collapse } from "reactstrap";

export const SidebarNav = ({item, parentMenuId, viewingMenuId, currentUser, openSubMenu}) => {

	const {id, subs} = item;

	const isDisplayBlock = (parentMenuId === id && viewingMenuId === '') || viewingMenuId === id;

	const subItemsToShow = this.filteredList(subs, currentUser).map((sub, index) => 
		<SidebarSecondLevelItem 
			subItem={sub} 
			itemId={item.id} 
			index={index}
			currentUser={currentUser}
            openSubMenu={openSubMenu} />);

	return (
		<Nav
			key={id}
			className={classnames({'d-block': isDisplayBlock})}
			data-parent={id} >
			{subItemsToShow}
		</Nav>
	);
};

const SidebarSecondLevelItem = ({ subItem, itemId, index, currentUser, openSubMenu }) => {

	const hasSubItems = subItem.subs && subItem.subs.length > 0;
	const hasSubItemsClass = hasSubItems ? 'has-sub-item' : "";
	const itemsToShow = "";

	if(subItem.newWindow){
		itemsToShow = <NewTabLink item={subItem} />;
	}
	else if(!hasSubItems){
		itemsToShow = <NavLink to={subItem.to}>
						<i className={subItem.icon} />{' '}
						<IntlMessages id={subItem.label} />
					</NavLink>;
	}
	else{
		itemsToShow = <>
						<SidebarSecondLevelLink
							subItem={subItem}
							collapsedMenus={collapsedMenus}
							itemId={item.id}
							index={index} />

						<Collapse isOpen={collapsedMenus.indexOf(`${item.id}_${index}`) === -1}>
							<SidebarNavSubItems
								subItem={subItem}
								itemId={item.id}
								index={index}
                                currentUser={currentUser}
                                openSubMenu={openSubMenu} />
						</Collapse>
					</>;
	}

	return (
		<NavItem
			key={`${itemId}_${index}`}
			className={hasSubItemsClass}>
			{itemsToShow}
		</NavItem>
	);
};

const SidebarNavSubItems = ({ subItem, itemId, index, currentUser, openSubMenu }) => {

	const makeitemToShow = (thirdSub, thirdIndex) =>
		<NavItem key={`${itemId}_${index}_${thirdIndex}`}>
			<SimpleLink item={thirdSub} openSubMenu={openSubMenu} />
		</NavItem>;

	const itemsToShow = this.filteredList(subItem.subs, currentUser).map(makeitemToShow);

	return (
		<Nav className="third-level-menu">
			{itemsToShow}
		</Nav>
	);
};

const SidebarSecondLevelLink = ({ subItem, collapsedMenus, itemId, index }) => {

	const isCollapsed = collapsedMenus.indexOf(`${item.id}_${index}`) === -1;
	const collapsedClass = isCollapsed ? "collapsed" : "";

	return (
		<NavLink
			className={`rotate-arrow-icon opacity-50 ${collapsedClass}`}
			to={subItem.to}
			id={`${itemId}_${index}`}
			onClick={(e) => this.toggleMenuCollapse(e, `${item.id}_${index}`)}>

			<i className="simple-icon-arrow-down" />{' '}
			<IntlMessages id={subItem.label} />
		</NavLink>
	);
};