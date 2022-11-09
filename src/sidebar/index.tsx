import React, { memo } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {DropdownButton} from "./DropdownButton";
import {Nav, NavItem} from "reactstrap";
import {Id} from "@makechtec/randomkey";
import { SimpleLink } from '../SimpleLink';

export const Sidebar = memo(({ menus=[] }: any ) => {

	const [activeMenu, setActiveMenu] = React.useState(0);

    return(
        <div className="sidebar">
			<MainMenu 
				menus={menus} 
				activeMenu={activeMenu} 
				setActiveMenu={setActiveMenu} />
			<SubMenuCollection 
				menus={menus} 
				activeMenu={activeMenu} />
        </div>
    );
});

const MainMenu = ({ menus, activeMenu, setActiveMenu }:any) => 

	<div className="main-menu">
		<div className="scroll">
		<PerfectScrollbar
			options={{ suppressScrollX: true, wheelPropagation: false }}
		>
			<Nav vertical className="list-unstyled">
			{
					menus.map( 
						({title, iconclass, hasmenu, ...props}: any, index: any)  => 
							<NavItem
								className={`${ activeMenu === index ? 'active' : '' }`}
								key={Id.generate()}
							>
								<SimpleLink
									onClick={ () => setActiveMenu(index)}
									className={`${ activeMenu === index ? 'active' : '' }`}
									iconClass={iconclass}
									{...props}
								>
									{title}
								</SimpleLink>
							</NavItem>
					)
				}
			</Nav>
		</PerfectScrollbar>
		</div>
	</div>;

const SubMenuCollection = ({menus, activeMenu}: any) => 
	<div className="sub-menu" >
		<div className="scroll">
			<PerfectScrollbar 
				options={{ suppressScrollX: true, wheelPropagation: false }}
			>
			{
				menus.map(
					(menu: any, index: any)  => 
						<SidebarMenu 
							key={Id.generate()} 
							dropdowns={menu.menuitems} 
							isActive={ activeMenu == index }  />
				)
			}
			</PerfectScrollbar>
		</div>
	</div>;

const SidebarMenu = ({dropdowns=[], isActive=false, ...props}: any) => 

	!isActive ? 
		<></> :
		<Nav vertical 
			className="list-unstyled d-block" 
			{...props}
		>
			{
				dropdowns.map(({hasmenu, menuitems, title, isopennewtab=false, iconclass, ...props}: any) => 
					<DropdownButton
						key={Id.generate()}
						hasSubItems={hasmenu}
						links={menuitems}
						isOpenNewTab={isopennewtab}
						iconClass={iconclass}
						{...props}>
						{title}
					</DropdownButton>
				)
			}
		</Nav>;

export {DropdownButton};
export {SimpleLink};