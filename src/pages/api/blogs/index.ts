import { NextApiResponse, NextApiRequest } from 'next'
import { blogs } from '@/data/blogs'
import { IBlog } from '@/interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBlog[]>
) {
  return res.status(200).json(blogs)
}