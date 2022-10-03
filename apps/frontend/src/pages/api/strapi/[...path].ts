import { NextApiRequest, NextApiResponse } from 'next'

import { fetcher } from 'lib/server/strapi'

/**
 * This handles client-side API calls.
 * Maybe in the future we can tighten this up but it's fine for now.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path } = req.query
  const pathString =
    typeof path === 'string' ? `/${path}` : `/${path!.join('/')}`

  try {
    // fetch from strapi backend
    const apiResponse = await fetcher(pathString)
    res.status(200).json(apiResponse)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
