import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item, handleDelete}) {


  return (
    
    <div className="item-card">
        { item.name } <br />
        { item.category} <br />
        { item.quantity} <br />
        { item.price} <br />
        { item.description} <br />
        { item.tags} <br />
        { item._id}<br />
  
          <Link to={
            {
              pathname: `/item/${item._id}`,
              state: {
                item:{item}
              }
            }
          }>DETAILS</Link><br />

        <hr />
    </div>
  )
}
