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
        { item._id}
          <button onClick={() => handleDelete(item._id)}>DELETE</button><br />
          <Link to={
            {
              pathname: `/admin/item/${item._id}`,
              state: {
                item:{item}
              }
            }
          }>DETAILS</Link><br />

          <Link to={
            {
              pathname: '/admin/edit',
              state: { item }
            }
          }>UPDATE</Link><br />
        <hr />
    </div>
  )
}
