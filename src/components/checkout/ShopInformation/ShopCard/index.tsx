import { Trash } from 'phosphor-react'
import {
  ButtonsContainer,
  CardImage,
  CardImageContainer,
  CardLabel,
  CardPrice,
  InfoContainer,
  RemoveButton,
  RemoveLabel,
  ShopCardContainer,
  ShopCardText,
  TextContainer,
} from './styles'
import { useContext } from 'react'
import { ShopListContext } from '@/src/pages/contexts/shopList'

export interface ShopCardProps {
  title: string
  price: string
  imageUrl: string
}

export function ShopCard({ title, price, imageUrl }: ShopCardProps) {
  const { removeProduct } = useContext(ShopListContext)

  return (
    <ShopCardContainer>
      <InfoContainer>
        <CardImageContainer>
          <CardImage src={imageUrl} alt="" />
        </CardImageContainer>
        <ShopCardText>
          <TextContainer>
            <CardLabel>{title}</CardLabel>
            <CardPrice>{price}</CardPrice>
          </TextContainer>
          <ButtonsContainer>
            <RemoveButton onClick={() => removeProduct(title)}>
              <Trash size={16} />
              <RemoveLabel>Remove</RemoveLabel>
            </RemoveButton>
          </ButtonsContainer>
        </ShopCardText>
      </InfoContainer>
    </ShopCardContainer>
  )
}
