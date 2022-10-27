import { CuahuitlDOM } from '@makechtec/cuahuitl';
import { menuClasses } from './MenuClasses';

export class MenuAnimator {

	containerClassnames;
	menuClickCount;
	setContainerClassnames;
	collapsedMenus;
	setCollapsedMenus;

	dom;

	constructor(
		containerClassnames,
		menuClickCount,
		setContainerClassnames,
		collapsedMenus,
		setCollapsedMenus,
		setViewingParentMenu
	) {

		this.containerClassnames = containerClassnames;
		this.menuClickCount = menuClickCount;
		this.setContainerClassnames = setContainerClassnames;
		this.collapsedMenus = collapsedMenus;
		this.setCollapsedMenus = setCollapsedMenus;
		this.setViewingParentMenu = setViewingParentMenu;

		this.dom = new CuahuitlDOM();
		this.windowListener = new WindowListener();

	}

	setSelectedLiActive() {

		['.sub-menu  li.active', '.third-level-menu  li.active'].forEach(query => this._deactiveElementByQuerySelector(query));
		['.third-level-menu  a.active', '.sub-menu  a.active'].forEach(query => this._activeElementByQuerySelector(query));

		const subMenuNode = this.dom.nodeByQuery('.sub-menu  a.active');
		const mainMenuNode = this.dom.nodeByQuery('.main-menu  li a.active');
		let newSelectedParentMenu = null;

		if (subMenuNode.isInDOM()) {

			newSelectedParentMenu = subMenuNode.getElement()
				.parentElement
				.parentElement
				.getAttribute('data-parent');

		}
		else {
			newSelectedParentMenu = mainMenuNode.isInDOM() ?
				mainMenuNode.getElement()
					.getAttribute('data-flag') :
				menuItems[0].id;
		}

		return newSelectedParentMenu;

	};

	toggleMenu(hasSubItems) {

		const currentClasses = this._classesToArray(this.containerClassnames);
		const clickIndex = this._findClickIndex(currentClasses, hasSubItems);

		if (clickIndex <= 0) {
			return;
		}

		this.setContainerClassnames(clickIndex, containerClassnames, hasSubItems);
	};

	filteredList = (menuItems, currentUser) => {

		if (!currentUser) {
			return menuItems;
		}

		return menuItems.filter(menuItem => (menuItem.roles && menuItem.roles.includes(currentUser.role)) || !menuItem.roles);

	};

	toggleMenuCollapse = (e, menuItemId) => {
		e.preventDefault();

		if (this.collapsedMenus.includes(menuItemId)) {
			this._removeFromArrayIfIts(this.collapsedMenus, menuItemId);
		} else {
			this._addToArrayIfIsNot(this.collapsedMenus, menuItemId);
		}

		this.setCollapsedMenus(this.collapsedMenus);
	};

	_findClickIndex(currentClasses, hasSubItems) {

		const isMenuSubHidden = currentClasses.includes('menu-sub-hidden') && this.menuClickCount === 3;
		const isMobileOrHidden = currentClasses.includes('menu-hidden') || currentClasses.includes('menu-mobile');
		const isDefault = currentClasses.includes('menu-default') && (this.menuClickCount % 4 === 0 || this.menuClickCount % 4 === 3);
		const isMenuSubHiddenAndMenuClickTwoOrThree = currentClasses.includes('menu-sub-hidden') && (this.menuClickCount === 2 || this.menuClickCount === 3);

		if (hasSubItems && isMenuSubHidden) {
			return 2;
		}

		if (hasSubItems && isMobileOrHidden) {
			return 0;
		}

		if (!hasSubItems && isDefault) {
			return 1;
		}

		if (!hasSubItems && (isMobileOrHidden || isMenuSubHiddenAndMenuClickTwoOrThree)) {
			return 0;
		}

		return -1;

	}

	isInMenuItems(menuItems, menuItemId) {
		const menuItem = menuItems.find((menuItem) => menuItem.id === menuItemId);
		return !!(menuItem && menuItem.subs && menuItem.subs.length > 0);
	};

	_activeElementByQuerySelector(query) {
		dom.findAndThen(query, (element) => element.parentElement.classList.add(menuClasses.ACTIVE));
	}

	_deactiveElementByQuerySelector(query) {
		dom.findAndThen(query, (element) => element.parentElement.classList.remove(menuClasses.ACTIVE));
	}

	_classesToArray(classes) {
		return classes ? classes.split(' ').filter((className) => className !== '') : '';
	}

	_addToArrayIfIsNot(arr, element) {

		if (arr.includes(element)) {
			return;
		}

		arr.push(element);
	}

	_removeFromArrayIfIts(arr, element) {

		if (!arr.includes(element)) {
			return;
		}

		arr = arr.filter((item) => item !== element);
	}

}