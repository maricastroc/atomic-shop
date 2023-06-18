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

export function ShopCard() {
  return (
    <ShopCardContainer>
      <InfoContainer>
        <CardImageContainer>
          <CardImage
            src="https://files.stripe.com/links/MDB8YWNjdF8xTktDZWVCZmsyRjZFcnpLfGZsX3Rlc3RfdXdkcVFTWWhqc0JTUHJNVkwxMzU3cEFx00GDI4cDfJ"
            alt=""
          />
        </CardImageContainer>
        <ShopCardText>
          <TextContainer>
            <CardLabel>T-Shirt</CardLabel>
            <CardPrice>$ 25.00</CardPrice>
          </TextContainer>
          <ButtonsContainer>
            <RemoveButton>
              <Trash size={16} />
              <RemoveLabel>Remove</RemoveLabel>
            </RemoveButton>
          </ButtonsContainer>
        </ShopCardText>
      </InfoContainer>
    </ShopCardContainer>
  )
}
