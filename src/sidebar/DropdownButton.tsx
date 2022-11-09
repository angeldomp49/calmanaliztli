import { SimpleLink } from "../SimpleLink";
import React, {memo} from "react";
import {NavItem, Nav, Collapse} from "reactstrap";
import {Id} from "@makechtec/randomkey";
import { useLocation } from "react-router-dom";

export const DropdownButton = memo(({ hasSubItems = false, links = [], children, to="#", ...props }: any) => {

    const hasSubItemsClass = hasSubItems ? 'has-sub-item' : "";

    const [isOpen, setIsOpen] = React.useState(false);
    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const isActive = useLocation().pathname === to;

    return(
        <NavItem
            className={hasSubItemsClass + `${ isActive ? 'active' : '' }`}
        >
            {
                hasSubItems ? 
                    <>
                        <DropdownLink 
                            onClick={ handleCollapse } 
                            isOpen={isOpen} 
                            to={to}
                            {...props}
                        >
                            {children}
                        </DropdownLink>
                        <DropdownMenu 
                            links={links} 
                            isOpen={isOpen} />
                    </> :
                    <SimpleLink 
                        to={to} 
                        {...props}
                    >
                        {children}
                    </SimpleLink> 
            }
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

const DropdownLink = ({children, onClick, isOpen, iconClass, ...props}: any) => {

	const collapsedClass = !isOpen ? "collapsed" : "";

    return(
        <SimpleLink
            onClick={onClick}
            className={`rotate-arrow-icon opacity-50 ${collapsedClass}`}
            iconClass="simple-icon-arrow-down"
            {...props}
        >
            {children}
        </SimpleLink>
    );
};