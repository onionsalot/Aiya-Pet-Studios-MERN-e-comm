import * as cartsAPI from '../../utilities/carts-api'

export default function CartPage({ cartItems, setCartItems, allCarts }) {
    console.log('page load, what is cartItems?', cartItems)
    let items;
    if (cartItems) {
       items = cartItems[0].map(item => 
       <tr>
           <td>{item.name}</td>
           <td>{item.price}</td>
           <td>{item.quantity}</td>
           <tr><button onClick={()=> handleRemoveFromCart(item._id)}>REMOVE</button></tr>
       </tr>)
       const cartId = allCarts.filter((e) => e.paid === false)[0]
       console.log('cartpage', cartItems)
       async function handleRemoveFromCart(deletedItemId) {
          console.log(`deleteing item ${deletedItemId} from cart ${cartId._id}`)
           await cartsAPI.deleteOneItem(cartId._id, deletedItemId)
           const filtered = cartItems[0].filter(i => i._id !== deletedItemId)
           setCartItems([cartItems[0].filter(i => i._id !== deletedItemId)])
           console.log('after deleting =>', filtered)
       }
       
} else {
    items = 'nothing'
}
    return(
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
        </table>
        {items}
    </>

    )
}