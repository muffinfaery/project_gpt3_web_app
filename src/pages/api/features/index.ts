import { NextApiResponse, NextApiRequest } from 'next'
import { features } from '@/data/features'
import { IFeature } from '@/interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IFeature[]>
) {
  return res.status(200).json(features)
}