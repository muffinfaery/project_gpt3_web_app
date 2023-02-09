// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { blogs } from '@/data/blogs'
import type { IBlog, IResponseError } from '@/interfaces'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBlog | IResponseError>
) {

  const { query } = req
  const { id } = query
  if(typeof id === "undefined"){
    res.status(404).json({ message: `No Blog Requested` })
  }

  const blog = blogs.find((record) => record.id === id)

  // Blog with id exists
  return blog
    ? res.status(200).json(blog)
    : res.status(404).json({ message: `Blog with id: ${id} not found.` })
}
