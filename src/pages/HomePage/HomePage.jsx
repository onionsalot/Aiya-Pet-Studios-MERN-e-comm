import React from 'react';
import * as usersService from '../../utilities/users-service';
import ItemCard from '../../components/ItemCard/ItemCard'

export default function HomePage({showItems}) {
	const items = showItems.map(item =>
		<ItemCard item={ item } />)
	

	return (
		<>
			<h1>HomePage</h1>
			{ items }
		</>
	);
}
