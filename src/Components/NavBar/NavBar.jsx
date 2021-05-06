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
			<Link to='/admin'>Admin Home</Link>
			&nbsp; | &nbsp;
			<Link to='/'>User Home</Link>
			&nbsp; | &nbsp;
			<span>{user.name}</span>
			&nbsp; | &nbsp;
			<span>Account Level: {user.acctlvl}</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
			&nbsp; | &nbsp;
			<Link to='/cart'>
				Cart (0)
			</Link>

		</nav>
	);
}
