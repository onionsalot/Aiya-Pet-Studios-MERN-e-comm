import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import './ItemListPage.css'

export default function ItemListPage({showItems, showCategories, currentCategory, setCurrentCategory}) {
  const testThing = showItems.filter(item => item.category.includes(currentCategory))
	const items = showItems
  .filter(item => item.category.includes(currentCategory))
  .map(item =>
		<ItemCard item={ item } />)

    console.log('TESTING OUT THE ITEMLISTPAGE SORTER =>', testThing)
	return (
		<main className="ItemListPage">
      <aside>
      <CategoryBar showCategories={showCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
      </aside>
      <div>
			<h1>HomePage</h1>

      { items.length> 0  ? items : "Welcome to Aiya's Pet Studios. Click on a category to begin!"}

      </div>

		</main>
	);
}