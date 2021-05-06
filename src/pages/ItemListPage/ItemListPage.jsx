import React from 'react';
import ItemCard from '../../Components/ItemCard/ItemCard'
import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import './ItemListPage.css'

export default function ItemListPage({showItems, showCategories, currentCategory, setCurrentCategory, handleAddToCart}) {
  const testThing = showItems.filter(item => item.category.includes(currentCategory))
	const items = showItems
  .filter(item => item.category.includes(currentCategory))
  .map(item =>
		<ItemCard item={ item } handleAddToCart={ handleAddToCart }/>)

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