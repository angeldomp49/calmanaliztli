import { menuClasses } from './MenuClasses';

export class DocumentListener {

	container;
	listeners;

	constructor(container) {
		this.container = container;
		this.listeners = [];
	}

	addListener(listener){
		this.listeners.push(listener);
	}

	attachListeners() {
		['click', 'touchstart', 'touchend'].forEach((event) =>{
			this.listeners.forEach( listener => document.addEventListener(event, listener, true));
		});
	}

	detachAllListeners() {
		['click', 'touchstart', 'touchend'].forEach((event) =>{
			this.listeners.forEach( listener => document.removeEventListener(event, listener));
		});
	}

	handleDocumentClick = (e) => {

		let isMenuClick = this._isMenuClick(e);

		if (
			isMenuClick ||
			this.container.current === e.target ||
			this.container.current.contains(e.target)
		) {
			return;
		}

	};

	_isMenuClick(e) {
		let isMenuButtonClass = false;

		const isMenuButton = this._containsClass(e.target, menuClasses.MENU_BUTTON);
		const isMenuButtonMobile = this._containsClass(e.target, menuClasses.MENU_BUTTON_MOBILE);
		const isParentMenuButton = this._containsClass(e.target.parentElement, menuClasses.MENU_BUTTON);
		const isParentMenuButtonMobile = this._containsClass(e.target.parentElement, menuClasses.MENU_BUTTON_MOBILE);
		const isDoubleParentMenuButton = this._containsClass(e.target.parentElement.parentElement, menuClasses.MENU_BUTTON);
		const isDoubleParentMenuButtonMobile = this._containsClass(e.target.parentElement.parentElement, menuClasses.MENU_BUTTON_MOBILE);

		isMenuButtonClass = (
			isMenuButton ||
			isMenuButtonMobile ||
			isParentMenuButton ||
			isParentMenuButtonMobile ||
			isDoubleParentMenuButton ||
			isDoubleParentMenuButtonMobile
		);

		return isMenuButtonClass;
	}

	_containsClass(obj, className) {
		return obj && obj.classList && obj.classList.contains(className);
	}
}

export class WindowListener {

	viewport;
	listeners;

	constructor(menuHiddenBreakpoint, subHiddenBreakpoint) {
		this.viewport = new Viewport(menuHiddenBreakpoint, subHiddenBreakpoint);
		this.listeners = [];
	}

	addListener(listener){
		this.listeners.push(listener);
	}

	attachListeners() {
		this.listeners.forEach( listener => window.addEventListener('resize', listener, true));
	}

	detachAllListeners() {
		this.listeners.forEach( listener => window.removeEventListener('resize', listener));
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}

}

export class Viewport {

	DESKTOP = 0;
	MOBILE = 1;
	EXTRA_SMALL = 2;

	mobileBreakPoint;
	extraSmallBreakPoint;

	constructor(menuHiddenBreakpoint, subHiddenBreakpoint) {
		this.mobileBreakPoint = menuHiddenBreakpoint;
		this.extraSmallBreakPoint = subHiddenBreakpoint;
	}

	viewportClasses(classes) {

		let nextClasses = this._classesToArray(classes);

		if (this.isInRange(this.MOBILE)) {
			nextClasses.push(menuClasses.MENU_MOBILE);
			return nextClasses;
		}

		nextClasses = nextClasses.filter((x) => x !== menuClasses.MENU_MOBILE);
		const isDefault = nextClasses.includes(menuClasses.MENU_DEFAULT);

		if (!isDefault) {
			return nextClasses;
		}

		if (this.isInRange(this.EXTRA_SMALL)) {
			this._addToArrayIfIsNot(nextClasses, menuClasses.MENU_SUB_HIDDEN);
		}

		if (this.isInRange(this.DESKTOP)) {
			nextClasses = nextClasses.filter((x) => x !== menuClasses.MENU_SUB_HIDDEN);
		}

		return nextClasses;
	}

	isInRange(range) {
		return current() == range;
	}

	current() {
		const width = window.innerWidth;

		if (windowWidth < this.mobileBreakPoint) {
			return this.MOBILE;
		}

		if (width < this.extraSmallBreakPoint) {
			return this.EXTRA_SMALL;
		}

		return this.DESKTOP;

	}

}