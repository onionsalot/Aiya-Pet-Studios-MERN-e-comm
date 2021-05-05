import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import * as itemsAPI from "../../utilities/items-api";

export default function ItemDetailsPage() {
    const { id } = useParams();
    console.log(`parems is currently => ${id}`)

  const [showItem, setShowItem] = useState([]);
  useEffect(() => {
    async function getItem() {
        const item = await itemsAPI.getOne(id);
        setShowItem(item)
        console.log(item)
    }
    getItem();
  }, []);


  return (
    <>
      <h1>Item Details Page</h1>
      {showItem.name}
      params is : {id}
    </>
  );
}
