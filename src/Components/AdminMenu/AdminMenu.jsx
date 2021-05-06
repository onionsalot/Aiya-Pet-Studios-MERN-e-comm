import React from 'react';
import { Link } from 'react-router-dom'


export default function AdminMenu() {

	return (
		<ul>
			<li><Link to="/admin">Home</Link></li>

			<li><Link to="/admin/items">All Items</Link></li>

			<li><Link to="/admin/category">All Categories</Link></li>
		</ul>
	);
}
