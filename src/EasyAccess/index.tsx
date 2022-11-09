import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { SimpleLink } from '../SimpleLink';
import {Id} from "@makechtec/randomkey";

export const EasyAccess = ({ menuItems = [] }: any) =>
	<div className="position-relative d-none d-sm-inline-block">
		<UncontrolledDropdown className="dropdown-menu-right">
			<DropdownToggle className="header-icon" color="empty">
				<i className="simple-icon-grid" />
			</DropdownToggle>
			<DropdownMenu
				className="position-absolute mt-3"
				end
				id="iconMenuDropdown"
			>
				{
					menuItems.map(
						({ iconclass, title, ...props }: any) =>
							<SimpleLink
								key={Id.generate()}
								className="icon-menu-item"
								iconClass={iconclass}
								{...props}
							>
								{title}
							</SimpleLink>
					)
				}
			</DropdownMenu>
		</UncontrolledDropdown>
	</div>