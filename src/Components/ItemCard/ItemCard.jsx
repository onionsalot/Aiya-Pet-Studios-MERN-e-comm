import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import * as cartsAPI from "../../utilities/carts-api"

export default function ItemCard({ item, handleAddToCart, showCart}) {
  const [show, setShow] = useState(false);
  const [addItem, setAddItem] = useState({
    itemId: item._id,
    name: item.name,
    quantity: 5,
    price: item.price
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`showCartId=> ${showCart} and addItem=> ${addItem}`)
    const newItem = await cartsAPI.updateItem(showCart._id , addItem);
    console.log(newItem)
    handleAddToCart(newItem)
  }
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



          <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { item.name } <br />
        { item.category} <br />
        { item.quantity} <br />
        { item.price} <br />
        { item.description} <br />
        { item.tags} <br />
        { item._id}<br />
        <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="quantity"
          value= "5"
        />
        <button type='submit' >Add To Cart</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <hr />
    </div>
  )
}
