import sendRequest from './send-request.js'
import { getToken } from "./users-service";
const BASE_URL = '/api/items'

export function getAll() {
    const token = getToken();
    return sendRequest(BASE_URL)
}

export function create(item) {
    const token = getToken();
    return sendRequest(BASE_URL, "POST", item)
}

export function deleteOne(deletedItemID) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${deletedItemID}`, "DELETE")
}

export function update(updatedItem) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${updatedItem._id}`, "PUT", updatedItem)
}

export function getOne(itemID) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${itemID}`)
}