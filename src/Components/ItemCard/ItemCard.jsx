import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import * as cartsAPI from "../../utilities/carts-api"

export default function ItemCard({ item, handleAddToCart, cartId}) {
  const [show, setShow] = useState(false);

  //const activeCart = allCarts.filter((e) => e.paid === false)
  console.log('ALL CARTS',cartId)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const itemToAdd = {
      itemId: e.target.itemId.value,
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
  }
    console.log(`showCartId=> ${cartId} and addItem=> ${itemToAdd.name}`)
    const newItem = await cartsAPI.updateItem(cartId._id, itemToAdd );
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
                    name="itemId"
                    value={item._id}>
                    </input>
                <input
                    type="hidden"
                    name="name"
                    value={item.name}>
                    </input>
                    <input
                    type="hidden"
                    name="price"
                    value={item.price}>
                    </input>
                    <input
                    type="number"
                    name="quantity"
                    defaultValue="1">
                    </input>
                    <button type="submit">submit</button>
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
