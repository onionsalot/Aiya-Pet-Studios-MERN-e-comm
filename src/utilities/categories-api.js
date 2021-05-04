import sendRequest from './send-request.js'
const BASE_URL = '/api/categories'

export function getAll() {
    console.log('API HIT // => getAll()')
    return sendRequest(BASE_URL)
}