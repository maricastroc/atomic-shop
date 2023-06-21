import { createContext, ReactNode, useState } from 'react'
import { ProductProps } from '../product/[id]'
import { AddressType } from '@/src/components/checkout/AddressForm'

interface HandleCheckoutType {
  address: AddressType
  name: string
  receiveNews: boolean
  phoneNumber: string
  email: string
}

interface ShopListContextData {
  shopList: ProductProps[]
  addNewProduct: (product: ProductProps) => void
  removeProduct: (title: string) => void
  checkoutData: HandleCheckoutType | null
  handleCheckout: (values: HandleCheckoutType) => void
  productsQuantity: number
}

export const ShopListContext = createContext<ShopListContextData>(
  {} as ShopListContextData,
)

interface ShopListContextProviderProps {
  children: ReactNode
}

export function ShopListContextProvider({
  children,
}: ShopListContextProviderProps) {
  const [shopList, setShopList] = useState<ProductProps[]>([])
  const [productsQuantity, setProductsQuantity] = useState<number>(0)
  const [checkoutData, setCheckoutData] = useState<HandleCheckoutType | null>(
    null,
  )

  function addNewProduct(product: ProductProps) {
    setShopList((prevShopList) => [...prevShopList, product])
    calculateTotalQuantity(productsQuantity, 'remove')
  }

  function removeProduct(title: string) {
    const newShopList = shopList.filter((item) => item.name !== title)

    setShopList(newShopList)
    calculateTotalQuantity(productsQuantity, 'add')
  }

  function calculateTotalQuantity(currentQuantity: number, action: string) {
    action === 'add'
      ? setProductsQuantity(currentQuantity + 1)
      : setProductsQuantity(currentQuantity - 1)
  }

  function handleCheckout({
    address,
    name,
    receiveNews,
    phoneNumber,
    email,
  }: HandleCheckoutType) {
    setCheckoutData({ address, name, receiveNews, phoneNumber, email })
  }

  const ShopListContextValue: ShopListContextData = {
    shopList,
    addNewProduct,
    checkoutData,
    handleCheckout,
    productsQuantity,
    removeProduct,
  }

  return (
    <ShopListContext.Provider value={ShopListContextValue}>
      {children}
    </ShopListContext.Provider>
  )
}
