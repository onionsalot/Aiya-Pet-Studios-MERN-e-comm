import sendRequest from './send-request.js'
const BASE_URL = '/api/items'

export function getAll() {
    console.log('API HIT // => getAll()')
    return sendRequest(BASE_URL)
}

export function create(item) {
    console.log('API HIT // => create()')
    return sendRequest(BASE_URL, "POST", item)
}

export function deleteOne(deletedItemID) {
    console.log('API HIT // => deleteOne()')
    return sendRequest(`${BASE_URL}/${deletedItemID}`, "DELETE")
}