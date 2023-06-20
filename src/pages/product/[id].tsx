import { stripe } from '@/src/lib/stripe'
import {
  FooterLogos,
  FooterItem,
  HomeFooter,
  ImageContainer,
  ProductContainer,
  ProductDescription,
  ProductDetails,
  Wrapper,
  ButtonContainer,
  BackToHome,
  ViewCart,
  ButtonsPressed,
} from '@/src/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAngleLeft,
  faAngleRight,
  faCartShopping,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { ShopListContext } from '../contexts/shopList'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  quantity: 1
  defaultPriceId: string
}

export default function Product({
  id,
  name,
  imageUrl,
  price,
  description,
  quantity,
  defaultPriceId,
}: ProductProps) {
  const { addNewProduct, shopList } = useContext(ShopListContext)
  const [buttonPressed, setButtonPressed] = useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>loading...</p>
  }

  function handleAddNewProduct() {
    addNewProduct({
      id,
      name,
      imageUrl,
      price,
      description,
      quantity,
      defaultPriceId,
    })
    setButtonPressed(true)
  }

  const phrases = description.split('.')

  console.log(shopList)

  return (
    <Wrapper>
      <ProductContainer>
        <ImageContainer>
          <Image src={imageUrl} alt="" width={400} height={480} />
        </ImageContainer>
        <ProductDetails>
          <div>
            <h1>{name}</h1>
            <span>{price}</span>
            <ProductDescription>
              {phrases.map((phrase, index) => {
                return (
                  <p key={index}>
                    <span></span>
                    {phrase}
                  </p>
                )
              })}
            </ProductDescription>
          </div>
          <ButtonContainer>
            {buttonPressed && (
              <ButtonsPressed>
                <Link href="/">
                  <BackToHome>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <p onClick={() => setButtonPressed(false)}>
                      Continue Shopping
                    </p>
                  </BackToHome>
                </Link>
                <Link href="/checkout">
                  <ViewCart>
                    <p onClick={() => setButtonPressed(false)}>
                      Go to checkout
                    </p>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </ViewCart>
                </Link>
              </ButtonsPressed>
            )}
            <button onClick={handleAddNewProduct}>
              <FontAwesomeIcon icon={faCartShopping} className="shopBtn" />
              {buttonPressed ? 'Added successfully!' : 'Add to Cart'}
            </button>
          </ButtonContainer>
        </ProductDetails>
      </ProductContainer>
      <HomeFooter>
        <Link href="/about">
          <FooterItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>ABOUT US</p>
          </FooterItem>
        </Link>
        <FooterLogos>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </FooterLogos>
      </HomeFooter>
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_O6b555R3wH4Qov' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price
  return {
    props: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount! / 100),
      description: product.description,
      defaultPriceId: price.id,
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
