import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";


import * as itemsAPI from "../../utilities/items-api";

export default function ItemDetailsPage() {
    const { id } = useParams();
    console.log(`parems is currently => ${id}`)
    const history = useHistory();

  const [showItem, setShowItem] = useState([]);
  useEffect(() => {
    async function getItem() {
        const item = await itemsAPI.getOne(id);
        setShowItem(item)
        console.log(item)
    }
    getItem();
  }, []);


  function goBack() {
    history.goBack();
  }

  return (
    <>
      <h1>Item Details Page</h1>
      <button onClick={goBack}> GO BACK </button>
      {showItem.name}
      params is : {id}
    </>
  );
}
