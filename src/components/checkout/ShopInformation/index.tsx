import { ShopCard } from './ShopCard'
import {
  ConfirmButton,
  ConfirmButtonLabel,
  Heading,
  Separator,
  ShopCardsContainer,
  ShopInfoBox,
  ShopInfoContainer,
  ShopInfoTextContainer,
  TextContainer,
} from './styles'

export function ShopInformation() {
  return (
    <>
      <ShopInfoContainer>
        <Heading>Selected products</Heading>
        <ShopInfoBox>
          <ShopCardsContainer>
            <ShopCard />
            <Separator></Separator>
            <ShopCard />
            <Separator></Separator>
            <ShopCard />
            <Separator></Separator>
          </ShopCardsContainer>
          <ShopInfoTextContainer>
            <TextContainer>
              <p>Total itens</p>
              <span>$35.50</span>
            </TextContainer>
            <TextContainer>
              <p>Delivery</p>
              <span>$35.50</span>
            </TextContainer>
            <TextContainer>
              <strong>Total</strong>
              <strong>$35.50</strong>
            </TextContainer>
          </ShopInfoTextContainer>
          <ConfirmButton type="submit">
            <ConfirmButtonLabel>Confirm delivery</ConfirmButtonLabel>
          </ConfirmButton>
        </ShopInfoBox>
      </ShopInfoContainer>
    </>
  )
}
