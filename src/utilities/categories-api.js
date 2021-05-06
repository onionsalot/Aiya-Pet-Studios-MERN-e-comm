import sendRequest from './send-request.js'
const BASE_URL = '/api/categories'

export function getAll() {
    console.log('API HIT // => getAll()')
    return sendRequest(BASE_URL)
}

export function create(cat) {
    console.log('API HIT // => create()')
    return sendRequest(BASE_URL, "POST", cat)
}

export function deleteOne(deletedCatID) {
    console.log('API HIT // => deleteOne()')
    return sendRequest(`${BASE_URL}/${deletedCatID}`, "DELETE")
}

export function update(updatedCat) {
    console.log('API HIT // => update()')
    return sendRequest(`${BASE_URL}/${updatedCat._id}`, "PUT", updatedCat)
}