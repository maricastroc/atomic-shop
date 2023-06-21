import { AddressForm } from '@/src/components/checkout/AddressForm'
import { UserDetails } from '@/src/components/checkout/UserDetails'
import { ShopInformation } from '@/src/components/checkout/ShopInformation'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import {
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutWrapper,
  Heading,
  ShopInformationContainer,
} from '@/src/styles/pages/checkout'
import { useContext, useState } from 'react'
import { ShopListContext } from '../contexts/shopList'

export type FormDataType = {
  zip: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  receiveNews: boolean
}

export default function Checkout() {
  const { shopList, handleCheckout, checkoutData } = useContext(ShopListContext)
  const [checked, setChecked] = useState(true)
  const methods = useForm<FormDataType>()

  console.log(shopList)

  const { handleSubmit } = methods

  function onSubmit(data: FormDataType) {
    if (data) {
      handleCheckout({
        address: {
          city: data.city,
          zip: data.zip,
          neighborhood: data.neighborhood,
          number: data.number,
          street: data.street,
          uf: data.uf,
        },
        name: `${data.firstName} ${data.lastName}`,
        receiveNews: checked,
        phoneNumber: data.phoneNumber,
        email: data.email,
      })
    }

    async function handleBuyProducts() {
      try {
        const response = await axios.post('api/checkout', {
          lineItems: shopList.map((item) => {
            return {
              price: item.defaultPriceId,
              quantity: item.quantity,
            }
          }),
        })

        const { checkoutUrl } = response.data

        window.location.href = checkoutUrl
      } catch {
        console.log('An error ocurred.')
      }
    }

    console.log(checkoutData)
    if (shopList.length > 0) {
      handleBuyProducts()
    }
  }

  function handleReceiveNews(checked: boolean) {
    setChecked(checked)
  }

  return (
    <CheckoutWrapper>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <CheckoutInfoContainer>
          <Heading>Complete your order</Heading>
          <FormProvider {...methods}>
            <AddressForm />
            <UserDetails onChange={handleReceiveNews} />
          </FormProvider>
        </CheckoutInfoContainer>
        <ShopInformationContainer>
          <ShopInformation />
        </ShopInformationContainer>
      </CheckoutContainer>
    </CheckoutWrapper>
  )
}
