import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./ItemDetailsPage.css";
import Placeholder from "../../pictures/placeholder.jpeg";

import * as itemsAPI from "../../utilities/items-api";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const history = useHistory();

  const [showItem, setShowItem] = useState([]);
  useEffect(() => {
    async function getItem() {
      const item = await itemsAPI.getOne(id);
      setShowItem(item);
      console.log(item);
    }
    getItem();
  }, []);

  function goBack() {
    history.goBack();
  }
  const currentImage = showItem.images ? (
    <img className="card-image" src={showItem.images} alt="Item" />
  ) : (
    <img className="card-image" src={Placeholder} alt="Item" />
  );

  return (
    <main className="ItemDetailsPage">
      <button className="back-button" onClick={goBack}>
        GO BACK
      </button>
      <div className="content">
        <h1>{showItem.name}</h1>
        <p> {currentImage} </p>
        <p> <b>Price</b>: ${showItem.price} </p>
        <p> <b>Category</b>: {showItem.category} </p>
        <p> <b>Description</b>: {showItem.description} </p>
        <p> <b>Tags</b>: {showItem.tags} </p>
      </div>
    </main>
  );
}
