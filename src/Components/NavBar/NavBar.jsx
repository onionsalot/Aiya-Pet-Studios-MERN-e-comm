import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser, cartItems, isAdmin }) {
	function handleLogOut() {
		// Delegate to the users-service
		userService.logOut();
		// Update state will also cause a re-render
		setUser(null);
	}
	let cartCount = 0
	if (cartItems.length>0) {
		cartCount = cartItems[0].length
	}

	return (
		<nav className="NavBar">

			<div className="nav-left">
				{isAdmin ? (
					<Link to='/admin'>Admin Home</Link>


				) : (
					<div></div>
				)}
			</div>

			<div className="nav-right">
			<span>Welcome back, {user.name}</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
			&nbsp; | &nbsp;
			<Link to='/cart'>
			Cart ({cartCount})
			</Link>
			</div>

		</nav>
	);
}
