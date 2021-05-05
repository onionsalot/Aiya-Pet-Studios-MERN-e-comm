import React from 'react';
import * as usersService from '../../../utilities/users-service';
import ItemCard from '../../../components/ItemCard/ItemCard'

export default function HomePage({showItems, handleDelete}) {
	const items = showItems.map(item =>
		<ItemCard item={ item } handleDelete={ handleDelete } />)
	

	return (
		<>
			<h1>HomePage</h1>
			{ items }
		</>
	);
}
