import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import * as cartsAPI from "../../utilities/carts-api";
import "./ItemCard.css";
import Placeholder from '../../pictures/placeholder.jpeg'

export default function ItemCard({ item, handleAddToCart, cartId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    handleClose();
    const itemToAdd = {
      itemId: e.target.itemId.value,
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
    };
    const newItem = await cartsAPI.updateItem(cartId._id, itemToAdd);
    handleAddToCart(newItem);
  }

  const currentImage = item.images ? <img className="card-image" src={item.images} alt="Item"/> : <img className="card-image" src={Placeholder} alt="Item"/>
  return (
    <div className="ItemCard">
      {currentImage}
      <div class="container">
        <h4><b>{item.name}</b></h4> 
        <p>$<span className='price'>{item.price}</span></p>
        <p>Quantity: {item.quantity} </p>

      <Link
        to={{
          pathname: `/item/${item._id}`,
          state: {
            item: { item },
          },
        }}
        >
        DETAILS
      </Link>
      <br />
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>
        </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Name:</b> {item.name} <br />
          <b>Quantity:</b> {item.quantity} <br />
          <b>Price:</b> {item.price} <br />

          <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="hidden" name="itemId" value={item._id}></input>
            <input type="hidden" name="name" value={item.name}></input>
            <input type="hidden" name="price" value={item.price}></input>
            <label><b>Amount to buy?</b></label>
            <input type="number" name="quantity" defaultValue="1"></input>
            <button type="submit">submit</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
