import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewItemPage from '../UserAdmin/NewItemPage/NewItemPage';
import HomepageAdmin from '../UserAdmin/HomepageAdmin/HomepageAdmin';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage'
import NavBar from '../../Components/NavBar/NavBar';
import UpdateItemPage from '../UserAdmin/UpdateItemPage/UpdateItemPage';
import RouteGuard from '../../Components/RouteGuard/RouteGuard'
import CategoryPage from '../UserAdmin/CategoryPage/CategoryPage'
import * as itemsAPI from '../../utilities/items-api'
import * as categoriesAPI from '../../utilities/categories-api'
import * as cartsAPI from '../../utilities/carts-api'

import './App.css';
import ItemListPage from '../ItemListPage/ItemListPage';
import CartPage from '../CartPage/CartPage';

export default function App() {
	const [isAdmin, setIsAdmin] = useState(false)
	const [user, setUser] = useState(getUser());
	const [showItems, setShowItems] = useState([]);
	const [showCategories, setShowCategories] = useState([]);
	const [currentCategory, setCurrentCategory] = useState(" ");
	const [showCart, setShowCart] = useState([])
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
		async function getCarts() {
			// get all carts from user
			console.log('App.js getCarts initiated....')
			const carts = await cartsAPI.getAll(user._id);
			console.log('APP.JS after useeffect checks', carts)
			// setshowcart to all carts with paid false
			// setpastorders to all carts with paid true
		}
		getCarts();
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

	function handleAddCategory(newCategory) {
		setShowCategories([...showCategories, newCategory])
	}

	async function handleDelete(deletedItemID) {
		await itemsAPI.deleteOne(deletedItemID);
		setShowItems(showItems.filter(i => i._id !== deletedItemID))
	}

	async function handleDeleteCategory(deletedCategoryID) {
		await categoriesAPI.deleteOne(deletedCategoryID);
		setShowCategories(showCategories.filter(i => i._id !== deletedCategoryID))
	}
	
	async function handleUpdate(updatedItem) {
		const newItemsArray = showItems.map(i =>
			i._id === updatedItem._id ? updatedItem : i
		  );
		  setShowItems(newItemsArray);
	}

	// ================== CART StuFF ================= //
	async function handleAddToCart(addItem) {
		console.log('attempting to add item => ', addItem)
		const cart = await cartsAPI.create()
	}

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/admin/new'>
							<NewItemPage handleAddItem={handleAddItem} showCategories={showCategories}/>
						</Route>
						<Route path='/admin/category'>
							<CategoryPage showCategories={showCategories} handleDeleteCategory={handleDeleteCategory} handleAddCategory={handleAddCategory}/>
						</Route>
						<Route exact path='/admin/edit'>
							<UpdateItemPage handleUpdate={handleUpdate} showCategories={showCategories}/>
						</Route>
						<Route path='/admin'>
							<HomepageAdmin showItems={showItems} handleDelete={handleDelete}/>
						</Route>
						<Route exact path='/cart'>
							<CartPage showCart={showCart}/>
						</Route>
						<Route exact path='/item/:id'>
							<ItemDetailsPage/>
						</Route>
						<Route exact path='/'>
							<ItemListPage showItems={showItems} showCategories={showCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} handleAddToCart={handleAddToCart}/>
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
