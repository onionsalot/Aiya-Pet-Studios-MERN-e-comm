import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="item-card">
        { item.name } <br />
        { item.category} <br />
        { item.quantity} <br />
        { item.price} <br />
        { item.description} <br />
        { item.tags} <br />
        <hr />
    </div>
  )
}
