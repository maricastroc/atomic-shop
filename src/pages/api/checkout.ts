import { stripe } from '@/src/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const priceID = 'price_1NKNt7Bfk2F6ErzKuiP66f0N'
  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = process.env.NEXT_URL

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceID,
        quantity: 1,
      },
    ],
    custom_text: {
      shipping_address: '',
    },
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
