'use server'

export async function getTopCryptos(limit: number, start?: number) {
  const apiUrl = process.env.CMC_API_URL
  if (!apiUrl) {
    throw new Error('API_URL is not defined')
  }
  const apiKey = process.env.CMC_API_KEY
  if (!apiKey) {
    throw new Error('API_KEY is not defined')
  }

  const qsLimit = limit ? `?limit=${limit}` : ''
  const qsStart = start ? `&start=${start}` : ''

  const response = await fetch(apiUrl + qsLimit + qsStart, {
    headers: {
      'X-CMC_PRO_API_KEY': apiKey
    }
  })

  const json = await response.json()
  return json.data
}
