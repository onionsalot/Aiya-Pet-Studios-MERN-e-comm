import sendRequest from './send-request.js'
const BASE_URL = '/api/carts'

export function getAll(userId) {
    console.log('API HIT // => getAll()')
    return sendRequest(`${BASE_URL}/${userId}`)
}

export function create(cat) {
    console.log('API HIT // => create()')
    return sendRequest(BASE_URL, "POST", cat)
}