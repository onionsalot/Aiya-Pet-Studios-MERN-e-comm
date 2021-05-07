import { Component, useState } from "react";
import * as itemsAPI from "../../../utilities/items-api";
import { useLocation } from "react-router";
import "./UpdateItemPage";

export default function UpdateItemPage({ handleUpdate, showCategories }) {
  const categoryList = showCategories.map((item) => (
    <option value={item.name}>{item.name}</option>
  ));
  const {
    state: { item },
  } = useLocation();
  const [currentItem, setCurrentItem] = useState({
    _id: item._id,
    name: item.name,
    category: item.category,
    quantity: item.quantity,
    price: item.price,
    description: item.description,
    tags: item.tag,
    buyable: item.buyable,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedItem = await itemsAPI.update(currentItem);
    console.log(updatedItem);
    handleUpdate(updatedItem);
  }
  function handleChange(e) {
    // console.log(`${[e.target.name]}: ${e.target.value}`)
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  }

  return (
    <div className="UpdateItemPage">
      <div className="content">
        <h1>Update Item</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={currentItem.name}
            onChange={handleChange}
            required
          />
          <label>Category</label>
          <select name="category" onChange={handleChange}>
            {categoryList}
          </select>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={currentItem.quantity}
            onChange={handleChange}
            required
            placeholder="0 for infinity"
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={currentItem.price}
            onChange={handleChange}
            required
          />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={currentItem.description}
            onChange={handleChange}
            required
          />
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={currentItem.tags}
            onChange={handleChange}
            placeholder="Tags separated by space"
          />
          <label>Listing Type</label>
          <select name="type" onChange={handleChange}>
            <option value="buyable">Buyable</option>
            <option value="pre-order">Pre-Order</option>
            <option value="preview">Preview</option>
          </select>
          <button type="submit">ADD ITEM</button>
        </form>
      </div>
    </div>
  );
}
