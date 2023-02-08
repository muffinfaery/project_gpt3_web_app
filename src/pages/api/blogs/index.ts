import { NextApiResponse, NextApiRequest } from 'next'
import { blogs } from '@/data'
import { Blog } from '@/interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Blog[]>
) {
  return res.status(200).json(blogs)
}