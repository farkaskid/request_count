const axios = require('axios')
const fetch = require('node-fetch')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const country = request.cf.country

  const url = `https://api.cloudflare.com/client/v4/accounts/3a8b90fb6d072da4a142dd6a400d7558/storage/kv/namespaces/30b52f55aafb41d88546d01d5f69440a/values/${country}`

  let count = await requests.get(country)

  if (!count) {
    count = 1
  } else {
    count = parseInt(count) + 1
  }

  try {
    response = await fetch(url, {
      method: 'PUT',
      headers: {"X-Auth-Email": "sid.shishu@gmail.com", "X-Auth-Key": "2d95d7699a0d146c7083ad230223b0a3899cf"},
      body: `${count}`
    })
  } catch (error) {
    return new Response(error, { status: 500 })
  }

  return new Response(`${country}: ${count}`, { status: 200 }) 
}
