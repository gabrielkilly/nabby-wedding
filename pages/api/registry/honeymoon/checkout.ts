import type { NextApiRequest, NextApiResponse } from 'next'
import {PriceType} from '../../../../components/model/PriceType'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const priceTypeMap: Map<PriceType, string> = new Map([
  [PriceType._25, "price_1Ms8E0I78eOVaDgELXcM58vJ"],
  [PriceType._50, "price_1Ms8E6I78eOVaDgEmcP6iyRT"],
  [PriceType._75, "price_1Ms8EDI78eOVaDgENYtWoVzl"],
  [PriceType._100, "price_1Ms8ERI78eOVaDgEtiGw83FC"],
  [PriceType.CUSTOM, "price_1Ms7tjI78eOVaDgEI4CrYnTq"],
])

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const priceType = parseRequest(req)
      if (priceType == undefined) {
        res.status(400).json({message: `invalid request body given ${priceType} ${req.body}`})
      } 

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceTypeMap[priceType],
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

function parseRequest(req: NextApiRequest): PriceType | undefined {
  if (req.body == null || !(req.body in PriceType)) {
    return undefined
  } else {
    return req.body as PriceType
  }
}

