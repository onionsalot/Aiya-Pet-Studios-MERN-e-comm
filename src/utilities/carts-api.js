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