import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {DropdownButton} from "./DropdownButton";
import {Nav} from "reactstrap";

export const SubMenuCollection = ({ sidebarItems=[] }: any ) => {

	const [activeMenu, setActiveMenu] = React.useState(0);

    return(
        <div className="sub-menu">
            <div className="scroll">
                <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: false }}>
                    {sidebarItems.map( (option: any, index: any)  => <SidebarMenu menuItems={option.menuItems} isActive={ activeMenu == index }  />)}
                </PerfectScrollbar>
            </div>
        </div>
    );
}

const SidebarMenu = ({menuItems=[], isActive=false, ...props}: any) => {

	if(isActive){
		return (
			<Nav 
			{...props}>
				{
					menuItems.map((menuItem: any) => {
						<DropdownButton {...menuItem} />
					})
				}
			</Nav>
		);
	}

	return <></>;
	
};
