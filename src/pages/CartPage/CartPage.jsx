import * as cartsAPI from "../../utilities/carts-api";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'

export default function CartPage({ cartItems, setCartItems, allCarts }) {
  console.log("page load, what is cartItems?", cartItems);


  let items;
  if (cartItems.length > 0) {
    items = cartItems[0].map((item) => (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {item.quantity}
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown>
                <form onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="_id"
                    value={item._id}>
                    </input>
                    <input
                    type="hidden"
                    name="itemId"
                    value={item.itemId}>
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
                    defaultValue={item.quantity}>
                    </input>
                    <button type="submit">submit</button>
                </form>

            </Dropdown>
          </DropdownButton>
        </td>
        <tr>
          <button onClick={() => handleRemoveFromCart(item._id)}>REMOVE</button>
        </tr>
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
        }
        const update = await cartsAPI.updateQuantity(cartId._id, updatedItem)
    }
  } else {
    items = "There are no items to display!";
  }
  return (
    <>
      <h1>Cart Page</h1>
      {/* {showCart._id}<br/> */}
      {/* {cartItems[0].length > 0 ? "HAS STUFF" : "Empty Cart..."}
        {cartItems[0]} */}
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {items}
      </table>
    </>
  );
}
