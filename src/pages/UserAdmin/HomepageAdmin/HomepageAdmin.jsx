import React from 'react';
import * as usersService from '../../../utilities/users-service';
import ItemTable from '../../../components/ItemTable/ItemTable'
import { Link } from 'react-router-dom'
import plusIcon from '../../../pictures/plus.png'

export default function HomePage({showItems, handleDelete}) {
	const items = showItems.map(item =>
		<tr><ItemTable item={ item } handleDelete={ handleDelete } /></tr>)
	

	return (
		<>
			<h1>Admin CP</h1>
			<table>
				<tr>
					<th>ITEM ID</th>
					<th>NAME</th>
					<th>CATEGORY</th>
					<th>ACTION</th>
				</tr>

			{ items }


			</table>

			<Link to='/admin/new'><img src={plusIcon} alt="add new item"/></Link>
		</>
	);
}
