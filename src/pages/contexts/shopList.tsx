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
    calculateTotalQuantity(productsQuantity)
  }

  function calculateTotalQuantity(currentQuantity: number) {
    setProductsQuantity(currentQuantity + 1)
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
  }

  return (
    <ShopListContext.Provider value={ShopListContextValue}>
      {children}
    </ShopListContext.Provider>
  )
}
