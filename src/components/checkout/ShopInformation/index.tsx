import React, { useContext } from 'react'
import Link from 'next/link'
import { ShopListContext } from '@/src/pages/contexts/shopList'
import { ShopCard } from './ShopCard'
import Lottie from 'lottie-react'
import ghostAnimation from '../../../../public/lottie/ghost.json'

import {
  EmptyContainer,
  Heading,
  LottieContainer,
  Separator,
  ShopCardsContainer,
  ShopInfoBox,
  ShopInfoContainer,
  TextEmptyContainer,
} from './styles'

export function ShopInformation() {
  const { shopList } = useContext(ShopListContext)

  return (
    <>
      <ShopInfoContainer>
        {shopList.length > 0 ? (
          <>
            <Heading>Selected products</Heading>
            <ShopInfoBox>
              <ShopCardsContainer>
                {shopList.map((item, index) => (
                  <React.Fragment key={index}>
                    <ShopCard {...item} />
                    <Separator />
                  </React.Fragment>
                ))}
              </ShopCardsContainer>
            </ShopInfoBox>
          </>
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
