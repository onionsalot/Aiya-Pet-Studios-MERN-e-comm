import * as cartsAPI from "../../utilities/carts-api";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import "./CartPage.css";

export default function CartPage({ cartItems, setCartItems, allCarts }) {
  console.log("page load, what is cartItems?", cartItems);
  const [cart, setCart] = useState([cartItems])
  const history = useHistory();
  function goBack() {
    history.goBack();
  }

  let items;
  if (cartItems.length > 0) {
    items = cartItems[0].map((item) => (
      <tr>
        <td>{item.name}</td>
        <td>$ {item.price}</td>
        <td>
          <DropdownButton id="dropdown-basic-button" title={item.quantity}>
            <Dropdown>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_id" value={item._id}></input>
                <input type="hidden" name="itemId" value={item.itemId}></input>
                <input type="hidden" name="name" value={item.name}></input>
                <input type="hidden" name="price" value={item.price}></input>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={item.quantity}
                ></input>
                <button type="submit">submit</button>
              </form>
            </Dropdown>
          </DropdownButton>
        </td>
        <td>
          <button onClick={() => handleRemoveFromCart(item._id)}>REMOVE</button>
        </td>
        <td>${item.price * item.quantity}</td>
      </tr>
    ));
    const cartId = allCarts.filter((e) => e.paid === false)[0];
    console.log("cartpage", cartItems);
    async function handleRemoveFromCart(deletedItemId) {
      console.log(`deleteing item ${deletedItemId} from cart ${cartId._id}`);
      await cartsAPI.deleteOneItem(cartId._id, deletedItemId);
      const filtered = cartItems[0].filter((i) => i._id !== deletedItemId);
      setCartItems([cartItems[0].filter((i) => i._id !== deletedItemId)]);
      console.log("after deleting =>", filtered);
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const updatedItem = {
        _id: e.target._id.value,
        itemId: e.target.itemId.value,
        name: e.target.name.value,
        price: e.target.price.value,
        quantity: e.target.quantity.value,
      };
      const update = await cartsAPI.updateQuantity(cartId._id, updatedItem);
      console.log('updated item is===>',update);
      setCart([...cartItems, updatedItem])
    }
  } else {
    items = "There are no items to display!";
  }
  return (
    <main className="CartPage">
      <button className="back-button" onClick={goBack}>
        GO BACK
      </button>
      <div className="content">
        <h1>Cart Items</h1>
        <table className="cart-table">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
            <th>Cost</th>
          </tr>
          {items}
          <tr>
              <th />
              <th />
              <th />
              <th />
              <th> Total: $</th>
          </tr>
        </table>
      </div>
    </main>
  );
}
