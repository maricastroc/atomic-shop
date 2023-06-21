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
  addNewProduct: (product: ProductProps, quantity: number) => void
  removeProduct: (title: string) => void
  checkoutData: HandleCheckoutType | null
  handleCheckout: (values: HandleCheckoutType) => void
}

export const ShopListContext = createContext<ShopListContextData>(
  {} as ShopListContextData,
)

interface ShopListContextProviderProps {
  children: ReactNode
}

export default function ShopListContextProvider({
  children,
}: ShopListContextProviderProps) {
  const [shopList, setShopList] = useState<ProductProps[]>([])
  const [checkoutData, setCheckoutData] = useState<HandleCheckoutType | null>(
    null,
  )

  function addNewProduct(product: ProductProps, quantityToAdd: number) {
    setShopList((prevShopList) => {
      const existingProductIndex = prevShopList.findIndex(
        (p) => p.name === product.name,
      )

      if (existingProductIndex !== -1) {
        const updatedShopList = [...prevShopList]
        updatedShopList[existingProductIndex].quantity += quantityToAdd
        return updatedShopList
      } else {
        const newProduct = { ...product, quantity: quantityToAdd }
        return [...prevShopList, newProduct]
      }
    })
  }

  function removeProduct(title: string) {
    setShopList((prevShopList) => {
      const updatedShopList = [...prevShopList]
      const productIndex = updatedShopList.findIndex(
        (product) => product.name === title,
      )

      if (productIndex !== -1) {
        const product = updatedShopList[productIndex]
        if (product.quantity === 1) {
          updatedShopList.splice(productIndex, 1)
        } else {
          updatedShopList[productIndex] = {
            ...product,
            quantity: product.quantity - 1,
          }
        }
      }

      return updatedShopList
    })
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
    removeProduct,
  }

  return (
    <ShopListContext.Provider value={ShopListContextValue}>
      {children}
    </ShopListContext.Provider>
  )
}
