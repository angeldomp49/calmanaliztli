import React from 'react';
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	NavLink,
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Id} from '@makechtec/randomkey';

export const NotificationsMenu = ({notifications=[]}: any) => {
	return (
		<div className="position-relative d-inline-block">
			<UncontrolledDropdown className="dropdown-menu-right">
				<DropdownToggle
					className="header-icon notificationButton"
					color="empty"
				>
					<i className="simple-icon-bell" />
					<span className="count">{notifications.length}</span>
				</DropdownToggle>
				<DropdownMenu
					className="position-absolute mt-3 scroll"
					end
					id="notificationDropdown"
				>
					<PerfectScrollbar
						options={{ suppressScrollX: true, wheelPropagation: false }}
					>
						{
							notifications.map((notification: any) => <NotificationItem key={Id.generate()} {...notification} />)
						}
					</PerfectScrollbar>
				</DropdownMenu>
			</UncontrolledDropdown>
		</div>
	);
};

const NotificationItem = ({ img="", title="", date="", to="#" }) =>
	<div className="d-flex flex-row mb-3 pb-3 border-bottom">
		<NavLink to={to}>
			<img
				src={img}
				alt={title}
				className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
			/>
		</NavLink>
		<div className="pl-3 pr-2">
			<NavLink to={to}>
				<p className="font-weight-medium mb-1">{title}</p>
				<p className="text-muted mb-0 text-small">{date}</p>
			</NavLink>
		</div>
	</div>
