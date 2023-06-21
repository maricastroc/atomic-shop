import { useContext, useState } from 'react'
import { ShopListContext } from '@/src/pages/contexts/shopList'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProductProps } from '@/src/pages/product/[id]'

import {
  ButtonsContainer,
  CardImage,
  CardImageContainer,
  CardLabel,
  CardPrice,
  InfoContainer,
  QuantityButton,
  QuantityContainer,
  ShopCardContainer,
  ShopCardText,
  TextContainer,
} from './styles'

export function ShopCard({
  id,
  name,
  price,
  imageUrl,
  description,
  defaultPriceId,
  quantity,
}: ProductProps) {
  const [quantityProduct, setQuantityProduct] = useState(quantity)
  const { removeProduct, addNewProduct } = useContext(ShopListContext)

  function handleAddProduct() {
    setQuantityProduct((prevQuantity) => prevQuantity + 1)
    addNewProduct(
      {
        id,
        name,
        price,
        imageUrl,
        description,
        defaultPriceId,
        quantity,
      },
      1,
    )
  }

  function handleRemoveProduct() {
    quantityProduct === 1
      ? setQuantityProduct(1)
      : setQuantityProduct((prevQuantity) => prevQuantity - 1)

    removeProduct(name)
  }

  return (
    <ShopCardContainer>
      <InfoContainer>
        <CardImageContainer>
          <CardImage src={imageUrl} alt="" />
        </CardImageContainer>
        <ShopCardText>
          <TextContainer>
            <CardLabel>{name}</CardLabel>
            <CardPrice>{price}</CardPrice>
          </TextContainer>
          <ButtonsContainer>
            <QuantityContainer>
              <QuantityButton onClick={handleAddProduct}>
                <FontAwesomeIcon icon={faPlus} />
              </QuantityButton>
              <span>{quantityProduct}</span>
              <QuantityButton onClick={handleRemoveProduct}>
                <FontAwesomeIcon icon={faMinus} />
              </QuantityButton>
            </QuantityContainer>
          </ButtonsContainer>
        </ShopCardText>
      </InfoContainer>
    </ShopCardContainer>
  )
}
