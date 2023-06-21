import React, { useContext, useMemo } from 'react'
import Link from 'next/link'
import { ShopListContext } from '@/src/pages/contexts/shopList'
import { ShopCard } from './ShopCard'
import Lottie from 'lottie-react'
import ghostAnimation from '../../../../public/lottie/ghost.json'

import {
  ConfirmButton,
  ConfirmButtonLabel,
  EmptyContainer,
  Heading,
  LottieContainer,
  Separator,
  ShopCardsContainer,
  ShopInfoBox,
  ShopInfoContainer,
  ShopInfoTextContainer,
  TextContainer,
  TextEmptyContainer,
} from './styles'

export function ShopInformation() {
  const { shopList } = useContext(ShopListContext)

  const total = useMemo(() => {
    return shopList.reduce((acc, product) => {
      const productPrice =
        parseFloat(product.price.replace('$', '')) * product.quantity

      return acc + productPrice
    }, 0)
  }, [shopList])

  function formatCurrency(value: number) {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }

  const formattedTotal = formatCurrency(total)

  return (
    <>
      <ShopInfoContainer>
        <Heading>Selected products</Heading>
        {shopList.length > 0 ? (
          <ShopInfoBox>
            <ShopCardsContainer>
              {shopList.map((item, index) => (
                <React.Fragment key={index}>
                  <ShopCard {...item} />
                  <Separator />
                </React.Fragment>
              ))}
            </ShopCardsContainer>
            <ShopInfoTextContainer>
              <TextContainer>
                <strong>Total</strong>
                <strong>{formattedTotal}</strong>
              </TextContainer>
            </ShopInfoTextContainer>
            <ConfirmButton type="submit">
              <ConfirmButtonLabel>Confirm delivery</ConfirmButtonLabel>
            </ConfirmButton>
          </ShopInfoBox>
        ) : (
          <EmptyContainer>
            <LottieContainer>
              <Lottie animationData={ghostAnimation} loop={true} />
            </LottieContainer>
            <TextEmptyContainer>
              <p>Hey, you haven&apos;t added any products to your cart yet!</p>
              <p>
                <Link href="/">Click here</Link>
                {''} to check our awesome products!
              </p>
            </TextEmptyContainer>
          </EmptyContainer>
        )}
      </ShopInfoContainer>
    </>
  )
}
