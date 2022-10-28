import { SimpleLink } from "./Links";
import React, {memo} from "react";
import {NavItem, Nav, Collapse} from "reactstrap";
import {Id} from "@makechtec/randomkey";

export const DropdownButton = memo(({ hasSubItems = false, links = [], children, ...props }: any) => {

    const hasSubItemsClass = hasSubItems ? 'has-sub-item' : "";

    const [isOpen, setIsOpen] = React.useState(false);
    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

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
            <DropdownLink onClick={ handleCollapse } {...props}>{children}</DropdownLink>
			<DropdownMenu links={links} isOpen={isOpen} />
		</NavItem>
    );
});

const DropdownMenu = ({ isOpen, links, ...props }: any) => {

	return(
        <>
            <Collapse isOpen={isOpen}>
                <Nav className="third-level-menu" {...props} >
                    {
                        links.map( (link :any) => {
                            return(
                                <NavItem key={Id.generate()}>
                                    <SimpleLink
                                        {...link}>{link.title}</SimpleLink>
                                </NavItem>
                            );
                        } )
                    }
                </Nav>
            </Collapse>
        </>
    );

};

const DropdownLink = ({children, handleCollapse, ...props}: any) => {

	const collapsedClass = props.isCollapsed ? "collapsed" : "";

    return(
        <SimpleLink
            onClick={handleCollapse}
            className={`rotate-arrow-icon opacity-50 ${collapsedClass}`}
            iconClass={"simple-icon-arrow-down"}>
            {children}
        </SimpleLink>
    );
};