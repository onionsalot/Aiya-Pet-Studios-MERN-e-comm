import sendRequest from './send-request.js'
const BASE_URL = '/api/carts'

export function getAll(userId) {
    console.log('API HIT // => getAll()')
    return sendRequest(`${BASE_URL}/${userId}`)
}

export function updateItem(cartId, addItem) {
    console.log('API HIT // => updateItem()')
    return sendRequest(`${BASE_URL}/${cartId}`, "PUT", addItem)
}

export function deleteOneItem(cartId, itemId) {
    console.log('API HIT // => deleteItem()')
    return sendRequest(`${BASE_URL}/${cartId}/${itemId}`, "DELETE")
}

export function updateQuantity(cartId, updatedItem) {
    console.log('API HIT // => update()')
    return sendRequest(`${BASE_URL}/${cartId}/${updatedItem._id}`, "PUT", updatedItem)
}