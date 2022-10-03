import { StrapiResponse } from 'lib/types'

const apiUrl = process.env.STRAPI_URL || 'http://localhost:1337/api'

/** Uses API token to fetch data from strapi backend */
export const fetcher = <T = any>(url: string): Promise<StrapiResponse<T>> =>
  fetch(`${apiUrl}/${url}`, {
    headers: { Authorization: `bearer ${process.env.API_TOKEN}` },
  }).then((r) => r.json())
