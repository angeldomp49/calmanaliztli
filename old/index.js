
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import menuItems from '../../constants/menu';
import { menuHiddenBreakpoint, subHiddenBreakpoint } from '../../constants/defaultValues';
import { SidebarNav } from './sidebar/SecondLevel';
import { MenuAnimator, DocumentListener, WindowListener } from './sidebar/Listeners';

import {
	setContainerClassnames,
	addContainerClassname,
	changeDefaultClassnames,
	changeSelectedMenuHasSubItems,
	currentUser
} from '../../redux/actions';

const Sidebar = ({
	containerClassnames,
	setContainerClassnames,
	selectedMenuHasSubItems,
	location,
	changeSelectedMenuHasSubItems,
	menuClickCount
}) => {

	const [selectedParentMenu, setSelectedParentMenu] = useState('');
	const [viewingParentMenu, setViewingParentMenu] = useState('');
	const [collapsedMenus, setCollapsedMenus] = useState('');

	const prevLocation = useRef('');
	const container = useRef(null);

	const menuAnimator = new MenuAnimator(
		changeSelectedMenuHasSubItems,
		containerClassnames,
		setSelectedParentMenu,
		menuClickCount,
		setContainerClassnames,
		selectedMenuHasSubItems,
		collapsedMenus,
		setCollapsedMenus,
		setSelectedParentMenu,
		setViewingParentMenu
	);

	const windowListener = new WindowListener(menuHiddenBreakpoint, subHiddenBreakpoint);

	const updateViewportClasses = e  => {

		if (e && !e.isTrusted) {
			return;
		}

		const nextClasses = this.viewport.viewportClasses(this.containerClassnames);

		setContainerClassnames(0, nextClasses.join(' '), this.selectedMenuHasSubItems);

	};

	windowListener.addListener(updateViewportClasses);

	const documentListener = new DocumentListener(container);

	documentListener.addListener(e => documentListener.handleDocumentClick(e));
	documentListener.addListener(() => setViewingParentMenu);
	documentListener.addListener(() => menuAnimator.toggleMenu());

	const setHasSubItemStatus = () => {
		const result = menuAnimator.isInMenuItems(menuItems, selectedParentMenu);
		changeSelectedMenuHasSubItems(result);
		menuAnimator.toggleMenu(result);
	};

	const openSubMenu = (e, menuItem) => {

		e.preventDefault();

		const { id, subs } = menuItem;
		const hasSubItems = subs && subs.length > 0;
		const currentClasses = _classesToArray(containerClassnames);

		changeSelectedMenuHasSubItems(hasSubItems);
		setViewingParentMenu(id);

		if (!hasSubItems) {
			setSelectedParentMenu(id);
			menuAnimator.toggleMenu(hasSubItems);
			return;
		}

		if (currentClasses.includes('menu-mobile')) {
			addContainerClassname('sub-show-temporary', containerClassnames);
		}

		const isMenuSubHiiden = currentClasses.includes('menu-sub-hidden') && (menuClickCount === 2 || menuClickCount === 0);
		const isMenuHidden = currentClasses.includes('menu-hidden') && (menuClickCount === 1 || menuClickCount === 3);
		const isMenuDefaultSubHidden = currentClasses.includes('menu-default') && !currentClasses.includes('menu-sub-hidden') && (menuClickCount === 1 || menuClickCount === 3);

		let index = 0;


		if (isMenuSubHiiden) {
			index = 3;
		} else if (isMenuHidden) {
			index = 2;
		} else if (isMenuDefaultSubHidden) {
			index = 0;
		}

		setContainerClassnames(index, containerClassnames, hasSubItems);

	};

	useEffect(() => {
		windowListener.attachListeners();
		updateViewportClasses();
		return () => windowListener.detachAllListeners();
	}, []);

	useEffect(() => {
		documentListener.attachListeners();
		return () => documentListener.detachAllListeners();
	}, []);

	useEffect(() => {
		const newSelectedParentMenu = menuAnimator.setSelectedLiActive();
		setSelectedParentMenu(newSelectedParentMenu, setHasSubItemStatus);
	}, []);

	useEffect(() => {

		const isChangedPathname = location.pathname !== prevLocation.current.pathname;

		if (isChangedPathname) {
			const newSelectedParentMenu = menuAnimator.setSelectedLiActive();
			setSelectedParentMenu(newSelectedParentMenu, setHasSubItemStatus);
			windowListener.scrollToTop();
		}

		prevLocation.current = location;

	});

	const menuItemsToShow = this.filteredList(menuItems).map((item) => 
		<SidebarNav 
			item={item}
			parentMenuId={selectedParentMenu}
			viewingMenuId={viewingParentMenu}
			currentUser={currentUser}
			openSubMenu={openSubMenu} />);

	return (
		<div className="sidebar" ref={container} >
			<SidebarMainMenu
				menuItems={menuItems}
				parentMenuId={selectedParentMenu}
				viewingMenuId={viewingParentMenu}
				currentUser={currentUser}
				openSubMenu={openSubMenu} />

			<div className="sub-menu">
				<div className="scroll">
					<PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: false }}>
						{menuItemsToShow}
					</PerfectScrollbar>
				</div>
			</div>
		</div>
	);
}


const mapStateToProps = ({ menu, authUser }) => {
	const {
		containerClassnames,
		subHiddenBreakpoint,
		menuHiddenBreakpoint,
		menuClickCount,
		selectedMenuHasSubItems,
	} = menu;

	const { currentUser } = authUser;
	return {
		containerClassnames,
		subHiddenBreakpoint,
		menuHiddenBreakpoint,
		menuClickCount,
		selectedMenuHasSubItems,
		currentUser,
	};
};

export default
	connect(mapStateToProps, {
		setContainerClassnames,
		addContainerClassname,
		changeDefaultClassnames,
		changeSelectedMenuHasSubItems,
	})(Sidebar);
