export default async function sendRequest(url, method = 'GET', payload=null) {
    const options = {method}
    if(payload) {
        options.headers = {'Content-Type':'application/json'}
        options.body = JSON.stringify(payload)}
    
    const res = await fetch(url, options)
    console.log(`PING to send-request. Res.ok =>`, res.ok)
    if(res.ok) return res.json()
    throw new Error('Bad Request');
}