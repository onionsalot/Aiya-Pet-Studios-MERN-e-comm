import sendRequest from './send-request.js'
import { getToken } from "./users-service";
const BASE_URL = '/api/categories'

export function getAll() {
    const token = getToken();
    return sendRequest(BASE_URL)
}

export function create(cat) {
    const token = getToken();
    return sendRequest(BASE_URL, "POST", cat)
}

export function deleteOne(deletedCatID) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${deletedCatID}`, "DELETE")
}

export function update(updatedCat) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${updatedCat._id}`, "PUT", updatedCat)
}