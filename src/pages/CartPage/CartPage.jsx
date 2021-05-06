export default function CartPage({ showCart }) {
   const items = showCart.items.map(item => item.name )
    return(
    <>
    <h1>Cart Page</h1>
        {showCart._id}<br/>
        {showCart.items.length > 0 ? "HAS STUFF" : "Empty Cart..."}
        {items}
    </>

    )
}