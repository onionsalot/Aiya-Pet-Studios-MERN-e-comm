import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewItemPage from '../NewItemPage/NewItemPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import * as itemsAPI from '../../utilities/items-api'
import * as categoriesAPI from '../../utilities/categories-api'

import './App.css';

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

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/new'>
							<NewItemPage handleAddItem={handleAddItem} showCategories={showCategories}/>
						</Route>
						<Route path='/'>
							<HomePage showItems={showItems}/>
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
