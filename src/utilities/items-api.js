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

export function update(updatedItem) {
    console.log('API HIT // => update()')
    return sendRequest(`${BASE_URL}/${updatedItem._id}`, "PUT", updatedItem)
}

export function getOne(itemID) {
    console.log('API HIT // => getOne()')
    return sendRequest(`${BASE_URL}/${itemID}`)
}