import { createContext, ReactNode, useState } from 'react'
import { ProductProps } from '../product/[id]'

interface ShopListContextData {
  shopList: ProductProps[]
  addNewProduct: (product: ProductProps) => void
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

  function addNewProduct(product: ProductProps) {
    setShopList((prevShopList) => [...prevShopList, product])
  }

  const ShopListContextValue: ShopListContextData = {
    shopList,
    addNewProduct,
  }

  return (
    <ShopListContext.Provider value={ShopListContextValue}>
      {children}
    </ShopListContext.Provider>
  )
}
