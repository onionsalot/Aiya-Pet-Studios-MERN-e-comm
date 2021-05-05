import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewItemPage from '../UserAdmin/NewItemPage/NewItemPage';
import HomepageAdmin from '../UserAdmin/HomepageAdmin/HomepageAdmin';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage'
//import NavBar from '../../components/NavBar/NavBar';
import UpdateItemPage from '../UserAdmin/UpdateItemPage/UpdateItemPage';
import RouteGuard from '../../components/RouteGuard/RouteGuard'
import * as itemsAPI from '../../utilities/items-api'
import * as categoriesAPI from '../../utilities/categories-api'

import './App.css';
import ItemListPage from '../ItemListPage/ItemListPage';

export default function App() {
	const [isAdmin, setIsAdmin] = useState(false)
	const [user, setUser] = useState(getUser());
	const [showItems, setShowItems] = useState([]);
	const [showCategories, setShowCategories] = useState([]);
	const [currentCategory, setCurrentCategory] = useState(" ");
	const history = useHistory();
	const location = useLocation();

	const currentUrl = String(location.pathname);

	useEffect(() => {
		console.log('USE LOCATION IS =>', currentUrl)
		if (currentUrl.includes('admin')) {
			console.log('contains admin')
			history.push('/admin');
		} else {
			history.push('/');
		}
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
	useEffect(() => {
		async function changeCategories() {
			console.log('changed to =>', currentCategory)

		}
		changeCategories()
	}, [currentCategory])

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
					{/* <NavBar user={user} setUser={setUser} /> */}
					<Switch>
						<Route path='/admin/new'>
							<NewItemPage handleAddItem={handleAddItem} showCategories={showCategories}/>
						</Route>
						<Route exact path='/admin/edit'>
							<UpdateItemPage handleUpdate={handleUpdate} showCategories={showCategories}/>
						</Route>
						<Route path='/admin'>
							<HomepageAdmin showItems={showItems} handleDelete={handleDelete}/>
						</Route>
						<Route exact path='/item/:id'>
							<ItemDetailsPage/>
						</Route>
						<Route exact path='/'>
							<ItemListPage showItems={showItems} showCategories={showCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
						</Route>
						<Redirect to='/' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} setIsAdmin={setIsAdmin}/>
			)}
		</main>
	);
}
