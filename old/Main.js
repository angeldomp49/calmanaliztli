import { Nav, NavItem } from 'reactstrap';
import classnames from 'classnames';
import { SidebarLink } from './sidebar/ThirdLevel';
import { Validator } from '@makechtec/cuahuitl';

export const SidebarMainMenu = ({ menuItems, parentMenuId, viewingMenuId, currentUser, openSubMenu }) => {

	const validator = new Validator();
	const itemsToShow = "";

	if (validator.isValidElement(menuItems)) {

		const makeitemToShow = item => {
			const isActive = (parentMenuId === item.id && viewingMenuId === '') || viewingMenuId === item.id;
			return (
				<SidebarNavItem
					item={item}
					isActive={isActive}
					hasFlag
					hasOnClick
					openSubMenu={openSubMenu} />
			);
		};

		itemsToShow = this.filteredList(menuItems, currentUser).map(makeitemToShow);
	}

	return (
		<div className="main-menu">
			<div className="scroll">
				<PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: false }}>
					<Nav vertical className="list-unstyled">
						{itemsToShow}
					</Nav>
				</PerfectScrollbar>
			</div>
		</div>
	);
};

const SidebarNavItem = ({ item, openSubMenu, isActive, hasFlag = false, hasOnClick = false }) =>
	<NavItem
		key={item.id}
		className={classnames({ active: isActive })}>
		<SidebarLink
			item={item}
			hasFlag={hasFlag}
			hasOnClick={hasOnClick}
			openSubMenu={openSubMenu} />
	</NavItem>;