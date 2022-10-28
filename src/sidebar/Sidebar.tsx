import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {DropdownButton} from "./DropdownButton";
import {Nav} from "reactstrap";
import {Id} from "@makechtec/randomkey";

export const Sidebar = ({ menus=[] }: any ) => {

	const [activeMenu, setActiveMenu] = React.useState(0);

    return(
        <div className="sub-menu">
            <div className="scroll">
                <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: false }}>
                    {menus.map( (menu: any, index: any)  => <SidebarMenu key={Id.generate()} dropdowns={menu.menuitems} isActive={ activeMenu == index }  />)}
                </PerfectScrollbar>
            </div>
        </div>
    );
}

const SidebarMenu = ({dropdowns=[], isActive=false, ...props}: any) => {

	console.log(dropdowns);

	if(isActive){
		return (
			<Nav {...props}>
				{
					dropdowns.map(({hasmenu, menuitems, title, isopennewtab, ...props}: any) => 
						<DropdownButton 
							key={Id.generate()}
							hasSubItems={hasmenu}
							links={menuitems}
							isOpenNewTab={isopennewtab}
							{...props}>
							{title}
						</DropdownButton>
					)
				}
			</Nav>
		);
	}

	return <></>;
	
};
