import { useState } from "react";
import { Link } from "react-router-dom";
import deleteIcon from '../../pictures/delete.png'
import editIcon from '../../pictures/edit.png'
import './ItemTable.css'

export default function ItemTable({ item, handleDelete}) {


  return (
      <>
      <td>
            { item._id }
        </td>
        <td>
            { item.name }
        </td>
        <td>
            { item.category }
        </td>
        <td>
        <button className="icon" onClick={() => handleDelete(item._id)}><img src={deleteIcon} alt="Edit" /></button>
          <Link to={
            {
              pathname: `/item/${item._id}`,
              state: {
                item:{item}
              }
            }
          }>DETAILS</Link>

          <Link to={
            {
              pathname: '/admin/edit',
              state: { item }
            }
          }><img src={editIcon} alt="Edit" /></Link>
        </td>
      </>
    // <div className="item-card">
    //     { item.name } <br />
    //     { item.category} <br />
    //     { item.quantity} <br />
    //     { item.price} <br />
    //     { item.description} <br />
    //     { item.tags} <br />
    //     { item._id}
    //       <button onClick={() => handleDelete(item._id)}>DELETE</button><br />
    //       <Link to={
    //         {
    //           pathname: `/admin/item/${item._id}`,
    //           state: {
    //             item:{item}
    //           }
    //         }
    //       }>DETAILS</Link><br />

    //       <Link to={
    //         {
    //           pathname: '/admin/edit',
    //           state: { item }
    //         }
    //       }>UPDATE</Link><br />
    //     <hr />
    // </div>
  )
}
