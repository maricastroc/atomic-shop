import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useFormContext, Controller } from 'react-hook-form'
import { useEffect } from 'react'
import axios from 'axios'
import { useDebounce } from '@/src/utils/useDebounce'

export type AddressType = {
  zip: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

export function AddressForm() {
  const { watch, setValue, control } = useFormContext<AddressType>()

  const zip = useDebounce(watch('zip'), 500)

  useEffect(() => {
    async function getAddress() {
      try {
        if (zip) {
          const { data } = await axios.get(
            `https://viacep.com.br/ws/${zip}/json/`,
          )

          if (data.erro) {
            return
          }

          setValue('street', data.logradouro)
          setValue('neighborhood', data.bairro)
          setValue('city', data.localidade)
          setValue('uf', data.uf)
        }
      } catch {
        console.log('An error ocurred.')
      }
    }

    getAddress()
  }, [zip, setValue])

  return (
    <AddressContainer>
      <AddressText>
        <IconContainer>
          <FontAwesomeIcon icon={faLocationDot} />
        </IconContainer>
        <TextContainer>
          <Heading>Delivery Address</Heading>
          <Paragraph>
            Enter the address where you would like to receive your order
          </Paragraph>
        </TextContainer>
      </AddressText>
      <AddressInfoContent>
        <Controller
          name="zip"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input className="zip" placeholder="ZIP" {...field} />
          )}
        />
        <Controller
          name="street"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input className="street" placeholder="Street" {...field} />
          )}
        />
        <InputContainer>
          <Controller
            name="number"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: '* Please enter a valid number',
              },
            }}
            render={({ field }) => (
              <Input
                inputMode="numeric"
                title="Please enter only numeric values"
                className="number"
                placeholder="Number"
                pattern="[0-9]*"
                {...field}
              />
            )}
          />
          <ComplementContainer>
            <Controller
              name="complement"
              control={control}
              render={() => (
                <Input className="complement" placeholder="Complement" />
              )}
            />
            <span>Optional</span>
          </ComplementContainer>
        </InputContainer>
        <InputContainer>
          <Controller
            name="neighborhood"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                className="neighborhood"
                placeholder="Neighborhood"
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input className="city" placeholder="City" {...field} />
            )}
          />
          <Controller
            name="uf"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input className="uf" placeholder="UF" {...field} />
            )}
          />
        </InputContainer>
      </AddressInfoContent>
    </AddressContainer>
  )
}
