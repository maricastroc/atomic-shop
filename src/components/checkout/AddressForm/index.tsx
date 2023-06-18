import { MapPinLine } from 'phosphor-react'
import {
  AddressContainer,
  AddressInfoContent,
  AddressText,
  ComplementContainer,
  Heading,
  IconContainer,
  Input,
  InputContainer,
  Paragraph,
  TextContainer,
} from './styles'

export function AddressForm() {
  return (
    <AddressContainer>
      <AddressText>
        <IconContainer>
          <MapPinLine size={22} />
        </IconContainer>
        <TextContainer>
          <Heading>Delivery Address</Heading>
          <Paragraph>
            Enter the address where you would like to receive your order
          </Paragraph>
        </TextContainer>
      </AddressText>
      <AddressInfoContent>
        <Input placeholder="Zip Code" name="zip" />
        <Input placeholder="Street" name="street" />
        <InputContainer>
          <Input placeholder="Number" name="number" />
          <ComplementContainer>
            <Input placeholder="Complement" name="complement" />
            <span>Optional</span>
          </ComplementContainer>
        </InputContainer>
        <InputContainer>
          <Input placeholder="Neighborhood" name="neighborhood" />
          <Input placeholder="City" name="city" />
          <Input placeholder="UF" name="uf" />
        </InputContainer>
      </AddressInfoContent>
    </AddressContainer>
  )
}
