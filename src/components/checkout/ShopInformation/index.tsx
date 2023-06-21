import { useContext, useMemo } from 'react'
import { ShopCard } from './ShopCard'
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
import { ShopListContext } from '@/src/pages/contexts/shopList'
import Lottie from 'lottie-react'
import ghostAnimation from '../../../../public/lottie/ghost.json'
import Link from 'next/link'

export function ShopInformation() {
  const { shopList } = useContext(ShopListContext)

  const total = useMemo(() => {
    return shopList.reduce((acc, product) => {
      const productPrice = parseFloat(product.price.replace('$', ''))

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
              {shopList.map((item, index) => {
                return (
                  <>
                    <ShopCard
                      key={index}
                      title={item.name}
                      price={item.price}
                      imageUrl={item.imageUrl}
                    />
                    <Separator></Separator>
                  </>
                )
              })}
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
