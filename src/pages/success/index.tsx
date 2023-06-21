import {
  BackToHome,
  Heading,
  ItemTextContainer,
  ItemWrapper,
  ItemContainer,
  Paragraph,
  SuccessContainer,
  ItemsContainer,
  Separator,
} from '@/src/styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '@/src/lib/stripe'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

interface SuccessProps {
  costumerName: string
  data: any
}

export default function Success({ costumerName, data }: SuccessProps) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }

  return (
    <>
      <Head>
        <title>Success | Atomic Shop</title>
      </Head>
      <SuccessContainer>
        <Heading>Purshace successfully completed!</Heading>
        {costumerName && (
          <Paragraph>
            Yay, <span>{costumerName}</span>, your purchase of is already on its
            way to your home!
          </Paragraph>
        )}
        {data.length > 0 && (
          <ItemsContainer>
            <h2>Checkout</h2>
            {data.map((item: any, index: string) => {
              return (
                <>
                  <ItemContainer>
                    <ItemWrapper key={index}>
                      <Image
                        src={item.price.product.images[0]}
                        alt=""
                        width={85}
                        height={110}
                      />
                    </ItemWrapper>
                    <ItemTextContainer>
                      <p>
                        {item.description} | {item.quantity} unit(s).
                      </p>
                      <span>{formatCurrency(item.amount_total / 100)}</span>
                    </ItemTextContainer>
                  </ItemContainer>
                  <Separator />
                </>
              )
            })}
          </ItemsContainer>
        )}
        <Link href="/">
          <BackToHome>Back to Home</BackToHome>
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details?.name
  console.log(costumerName)
  const data = session.line_items?.data

  return {
    props: {
      costumerName,
      data,
    },
  }
}
