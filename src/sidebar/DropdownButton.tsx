import { SimpleLink } from "./Links";
import React, {memo} from "react";
import {NavItem, Nav, Collapse} from "reactstrap";

export const DropdownButton = memo(({ hasSubItems = false, links = [], children, ...props }: any) => {

    const hasSubItemsClass = hasSubItems ? 'has-sub-item' : "";

    if(!hasSubItems){
        return(
            <SimpleLink {...props}>
                {children}
            </SimpleLink>
        );
        
    }

    return(
        <NavItem
			className={hasSubItemsClass}>
			<DropdownMenu links={links} {...props} />
		</NavItem>
    );
});

const DropdownMenu = ({ ...props }: any) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

	return(
        <>
            <DropdownLink onClick={ handleCollapse } {...props} />

            <Collapse isOpen={isOpen}>
                <DropdownListItems {...props} />
            </Collapse>
        </>
    );

};

const DropdownListItems = ({ links, ...props }: any) => {

	return (
		<Nav className="third-level-menu" {...props} >
			{
                links.map( (link:any) => {
                    return(
                        <NavItem>
                            <SimpleLink
                                {...link}>{link.title}</SimpleLink>
                        </NavItem>
                    );
                } )
            }
		</Nav>
	);
};

const DropdownLink = (props: any) => {

	const collapsedClass = props.isCollapsed ? "collapsed" : "";

    return(
        <SimpleLink
            className={`rotate-arrow-icon opacity-50 ${collapsedClass}`}
            iconClass={"simple-icon-arrow-down"}>
            {props.children}
        </SimpleLink>
    );
};