import { useState } from "react";
import * as itemsAPI from "../../../utilities/items-api";
import Axios from 'axios';
import './NewItemPage.css'

export default function NewItemPage({handleAddItem, showCategories}) {
  const categoryList = showCategories.map(item =>
    <option value={item.name}>{item.name}</option>)
    const [image, setImage] = useState('');
  const [item, setItem] = useState({
    name: "",
    category: `${showCategories[0].name}`,
    quantity: "",
    price: "",
    description: "",
    tags: "",
    buyable: "buyable",
    images: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const newItem = await itemsAPI.create(item)
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'xdgkaefq')
    Axios.post("https://api.cloudinary.com/v1_1/dq8yhiefg/image/upload", formData).then((response) =>
    console.log(response.data.url))
    handleAddItem(newItem)
  }
  function handleChange(e) {
    setItem({...item, [e.target.name]: e.target.value})
  }
  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'xdgkaefq')
    Axios.post("https://api.cloudinary.com/v1_1/dq8yhiefg/image/upload", formData).then((response) =>
    setItem({...item, images: response.data.url}))
  }



  
  return (
    <div className="NewItemPage">
      <div className="content">

      <h1>NewItemPage</h1>

        <label>Images</label>
        <input
          type="file"
          onChange={(event) => {setImage(event.target.files[0])}}
        /><button onClick={uploadImage}>Upload Image</button> 
        <br />
        <p>{item.images === "" ? "Upload image before submitting!" : "Upload Success!!"}</p>
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
    </div>
  );
}
