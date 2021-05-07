import React from 'react';
import ItemCard from '../../Components/ItemCard/ItemCard'
import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import './ItemListPage.css'

export default function ItemListPage({showItems, showCategories, currentCategory, setCurrentCategory, handleAddToCart, allCarts}) {
  const cartId = allCarts.filter((e) => e.paid === false)[0]
  //const cartId = 1

  const items = showItems
  .filter(item => item.category.includes(currentCategory))
  .map(item =>
		<ItemCard item={ item } handleAddToCart={ handleAddToCart } cartId={ cartId } />)

	return (
		<main className="ItemListPage">
      <aside>
      <CategoryBar showCategories={showCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
      </aside>
      <div className="content">
			<h1>HomePage</h1>
      <div className="list-container">
      { items.length> 0  ? items : "Welcome to Aiya's Pet Studios. Click on a category to begin!"}
      </div>

      </div>

		</main>
	);
}