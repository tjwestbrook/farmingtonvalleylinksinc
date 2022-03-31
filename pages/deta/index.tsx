import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Deta } = require("deta")
  const deta = Deta(/*DETA_PROJECT_KEY*/)
  const db = deta.Base("home")
  const data = await db.get("greeting")
  res.status(200).json(data.text)
}