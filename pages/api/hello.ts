// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { delBasePath } from 'next/dist/shared/lib/router/router';

type Data = {
  name: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // if (req.method === 'POST') {
    // Confirm FarmingtonValleyLinks via Google Account
    // Page-editing options (text, image, links)
    // Preview and submit
  // }
  // const { Deta } = require("deta");
  // const deta = Deta("")
  // const db = deta.Base("")
  res.status(200).json({ name: 'John Doe' })
}