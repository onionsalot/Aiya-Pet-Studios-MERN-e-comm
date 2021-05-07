import sendRequest from './send-request.js'
import { getToken } from "./users-service";
const BASE_URL = '/api/carts'

export function getAll(userId) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${userId}`)
}

export function updateItem(cartId, addItem) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${cartId}`, "PUT", addItem)
}

export function deleteOneItem(cartId, itemId) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${cartId}/${itemId}`, "DELETE")
}

export function updateQuantity(cartId, updatedItem) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${cartId}/${updatedItem._id}`, "PUT", updatedItem)
}