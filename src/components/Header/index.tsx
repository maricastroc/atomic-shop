import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { MapPin } from 'phosphor-react'
import Link from 'next/link'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import {
  ButtonShop,
  ButtonShopLabel,
  HeaderContainer,
  ItemsContainer,
  LocationContainer,
} from './styles'
import { useLocation } from '@/src/hooks/useLocation'
import { ShopListContext } from '@/src/pages/contexts/shopList'
import LogoImg from '../../../public/assets/logo-2.svg'

export function Header() {
  const [productsQuantity, setProductsQuantity] = useState(0)
  const { shopList } = useContext(ShopListContext)
  const { city, uf } = useLocation()

  useEffect(() => {
    const totalQuantity = shopList.reduce((accumulator, product) => {
      return accumulator + product.quantity
    }, 0)

    setProductsQuantity(totalQuantity)
  }, [shopList])

  console.log(productsQuantity)

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={LogoImg} alt="" />
      </Link>
      <ItemsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" className="mapPin_icon" />
          <p>
            {city} {uf}
          </p>
        </LocationContainer>
        <Link href="/checkout">
          <ButtonShop>
            <ButtonShopLabel>
              <p>{productsQuantity}</p>
            </ButtonShopLabel>
            <FontAwesomeIcon icon={faCartShopping} />
          </ButtonShop>
        </Link>
      </ItemsContainer>
    </HeaderContainer>
  )
}
