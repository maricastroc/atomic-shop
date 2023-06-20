import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Heading,
  IconContainer,
  Paragraph,
  TextSection,
  TextContainer,
  UserDetailsContent,
  InputContainer,
  Input,
  InputItem,
  CheckboxContainer,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export type UserDetailsType = {
  firstName: string
  lastName: string
  phoneNumber: number
  email: string
  receiveNews: boolean
}

export function UserDetails() {
  const [checked, setChecked] = useState(true)
  const {
    control,
    formState: { errors },
  } = useFormContext<UserDetailsType>()

  return (
    <Container>
      <TextSection>
        <IconContainer>
          <FontAwesomeIcon icon={faAddressBook} />
        </IconContainer>
        <TextContainer>
          <Heading>User Details</Heading>
          <Paragraph>
            Please, fill the following fields to complete your order
          </Paragraph>
        </TextContainer>
      </TextSection>
      <UserDetailsContent>
        <InputContainer>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                className="firstName"
                placeholder="First Name"
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input className="lastName" placeholder="Last Name" {...field} />
            )}
          />
        </InputContainer>
        <InputContainer>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: '* Please enter a valid email address',
              },
            }}
            render={({ field }) => (
              <InputItem>
                <Input
                  className="email"
                  placeholder="Email"
                  {...field}
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                />
                {errors.email && <span>{errors.email.message}</span>}
              </InputItem>
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: '* Please enter a valid phone number',
              },
            }}
            render={({ field }) => (
              <InputItem>
                <Input
                  className="phoneNumber"
                  placeholder="Phone Number"
                  pattern="[0-9]*"
                  {...field}
                />
                {errors.phoneNumber && (
                  <span>{errors.phoneNumber.message}</span>
                )}
              </InputItem>
            )}
          />
        </InputContainer>
        <CheckboxContainer>
          <Checkbox.Root
            className="CheckboxRoot"
            defaultChecked
            id="c1"
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
          >
            <Checkbox.Indicator className="CheckboxIndicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className="Label" htmlFor="c1">
            I would like to receive news about new products and offers.
          </label>
        </CheckboxContainer>
      </UserDetailsContent>
    </Container>
  )
}
