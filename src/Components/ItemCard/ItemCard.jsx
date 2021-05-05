import { useState } from "react";

export default function ItemCard({ item, handleDelete, handleUpdate }) {


  return (
    <div className="item-card">
        { item.name } <br />
        { item.category} <br />
        { item.quantity} <br />
        { item.price} <br />
        { item.description} <br />
        { item.tags} <br />
        { item._id}
          <button onClick={() => handleDelete(item._id)}>DELETE</button>

        
        <hr />
    </div>
  )
}
