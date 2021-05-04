import { Component, useState } from "react";
import * as itemsAPI from "../../utilities/items-api";

export default function NewItemPage({handleAddItem, showCategories}) {
  const [item, setItem] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    description: "",
    tags: "",
    buyable: "buyable",
  });
  const categoryList = showCategories.map(item =>
		<option value={item.name}>{item.name}</option>)

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(item)
    const newItem = await itemsAPI.create(item)
    console.log(newItem)
    handleAddItem(item)
  }
  function handleChange(e) {
    // console.log(`${[e.target.name]}: ${e.target.value}`)
    setItem({...item, [e.target.name]: e.target.value})
  }

  
  return (
    <div>
      <h1>NewItemPage</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
        />
        <label>Category</label>
        <select 
          name="category"
          onChange={handleChange}>
            {categoryList}
        </select>
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          required
          placeholder="0 for infinity"
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
          required
        />
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          value={item.tags}
          onChange={handleChange}
          placeholder="Tags separated by space"
        />
        <label>Listing Type</label>
        <select 
          name="type"
          onChange={handleChange}>
            <option value="buyable">Buyable</option>
            <option value="pre-order">Pre-Order</option>
            <option value="preview">Preview</option>
        </select>
        <button type="submit">
              ADD ITEM
            </button>
      </form>
    </div>
  );
}
