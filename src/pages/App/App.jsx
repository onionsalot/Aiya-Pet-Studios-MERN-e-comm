import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewItemPage from '../NewItemPage/NewItemPage';
import HomePage from '../HomePage/HomePage';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage'
import NavBar from '../../components/NavBar/NavBar';
import * as itemsAPI from '../../utilities/items-api'
import * as categoriesAPI from '../../utilities/categories-api'

import './App.css';
import UpdateItemPage from '../UpdateItemPage/UpdateItemPage';

export default function App() {
	const [user, setUser] = useState(getUser());
	const [showItems, setShowItems] = useState([]);
	const [showCategories, setShowCategories] = useState([]);
	const history = useHistory();

	useEffect(() => {
		history.push('/');
	}, [showItems, history])
	useEffect(() => {
		async function getItems() {
			const items = await itemsAPI.getAll();
			setShowItems(items);
		}
		getItems();
	}, [])
	useEffect(() => {
		async function getCategories() {
			const categories = await categoriesAPI.getAll();
			setShowCategories(categories)
		}
		getCategories();
	}, [])

	function handleAddItem(newItem) {
		setShowItems([...showItems, newItem])
	}

	async function handleDelete(deletedItemID) {
		await itemsAPI.deleteOne(deletedItemID);
		setShowItems(showItems.filter(i => i._id !== deletedItemID))
	}
	
	async function handleUpdate(updatedItem) {
		const newItemsArray = showItems.map(i =>
			i._id === updatedItem._id ? updatedItem : i
		  );
		  setShowItems(newItemsArray);
	}

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/new'>
							<NewItemPage handleAddItem={handleAddItem} showCategories={showCategories}/>
						</Route>
						<Route exact path='/item/:id'>
							<ItemDetailsPage/>
						</Route>
						<Route exact path='/edit'>
							<UpdateItemPage handleUpdate={handleUpdate} showCategories={showCategories}/>
						</Route>
						<Route path='/'>
							<HomePage showItems={showItems} handleDelete={handleDelete}/>
						</Route>
						<Redirect to='/' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
