import { AddressForm, AddressType } from '@/src/components/checkout/AddressForm'
import { UserDetails } from '@/src/components/checkout/UserDetails'
import { ShopInformation } from '@/src/components/checkout/ShopInformation'
import { useForm, FormProvider } from 'react-hook-form'
import {
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutWrapper,
  Heading,
  ShopInformationContainer,
} from '@/src/styles/pages/checkout'

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
  const methods = useForm<FormDataType>()

  const { handleSubmit } = methods

  function onSubmit(data: AddressType) {
    console.log(data)
  }

  return (
    <CheckoutWrapper>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <CheckoutInfoContainer>
          <Heading>Complete your order</Heading>
          <FormProvider {...methods}>
            <AddressForm />
            <UserDetails />
          </FormProvider>
        </CheckoutInfoContainer>
        <ShopInformationContainer>
          <ShopInformation />
        </ShopInformationContainer>
      </CheckoutContainer>
    </CheckoutWrapper>
  )
}
