import { AddressForm } from '@/src/components/checkout/AddressForm'
import { PaymentForm } from '@/src/components/checkout/PaymentForm'
import { ShopInformation } from '@/src/components/checkout/ShopInformation'
import {
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutWrapper,
  Heading,
  ShopInformationContainer,
} from '@/src/styles/pages/checkout'

export default function Checkout() {
  return (
    <CheckoutWrapper>
      <CheckoutContainer>
        <CheckoutInfoContainer>
          <Heading>Complete your order</Heading>
          <AddressForm />
          <PaymentForm />
        </CheckoutInfoContainer>
        <ShopInformationContainer>
          <ShopInformation />
        </ShopInformationContainer>
      </CheckoutContainer>
    </CheckoutWrapper>
  )
}
