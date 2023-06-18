import { styled } from '@stitches/react'

export const CheckoutWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '6rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

export const CheckoutContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  marginTop: '2.5rem',
  width: 'clamp(10rem, 90vw, 50rem)',

  '@media (min-width: 1440px)': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '2.5rem auto 0',
    width: '100%',
  },
})

export const CheckoutInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  justifyContent: 'flex-start',

  '@media (min-width: 1440px)': {
    gap: '0.1rem',
  },
})

export const Heading = styled('h2', {
  color: '$base-subtitle',
  fontSize: '1.25rem',
  marginBottom: '0.975rem',
  marginLeft: '0.5rem',

  '@media (min-width: 1440px)': {
    fontSize: '1.125rem',
  },
})

export const ShopInformationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '1rem',
})
