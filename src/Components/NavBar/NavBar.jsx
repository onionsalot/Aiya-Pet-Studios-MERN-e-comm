import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		// Delegate to the users-service
		userService.logOut();
		// Update state will also cause a re-render
		setUser(null);
	}

	return (
		<nav>
			<Link to='/'>Home Page</Link>
			&nbsp; | &nbsp;
			<Link to='/new'>Add Item</Link>
			&nbsp; | &nbsp;
			<span>{user.name}</span>
			&nbsp; | &nbsp;
			<span>Account Level: {user.acctlvl}</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}
