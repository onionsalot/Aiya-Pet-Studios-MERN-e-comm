export default function CartPage({ showCart }) {
    return(
    <>
    <h1>Cart Page</h1>
        {showCart.length > 0 ? "HAS STUFF" : "Empty Cart..."}
    </>

    )
}