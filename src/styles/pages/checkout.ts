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
  color: '$gray100',
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
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
})

export const ShopInfoTextContainer = styled('div', {
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.85rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '$gray100',
    '> p': {
      fontSize: '1rem',
    },
    '> span': {
      fontSize: '1rem',
    },
    '> strong': {
      color: '$base-subtitle',
      fontSize: '1.25rem',
      fontWeight: '700',
    },
  },

  '@media (min-width: 1440px)': {
    div: {
      '> p': {
        fontSize: '0.875rem',
      },
      '> span': {
        fontSize: '0.875rem',
      },
      '> strong': {
        color: '$gray100',
        fontSize: '1.25rem',
        fontWeight: '700',
      },
    },
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray300',
  backgroundColor: '$gray800',
  borderRadius: '16px',
  padding: '1rem',
})

export const ConfirmButton = styled('button', {
  marginTop: '1.5rem',
  cursor: 'pointer',
  display: 'flex',
  backgroundColor: '$green500',
  padding: '1rem',
  width: '100%',
  border: 'none',
  borderRadius: '8px',

  '&:hover': {
    filter: 'brightness(0.8)',
    transition: '200ms',
  },

  '&:disabled': {
    opacity: 0.8,
    cursor: 'not-allowed',
  },
})

export const ConfirmButtonLabel = styled('p', {
  width: '100%',
  textAlign: 'center',
  color: '$gray100',
  fontSize: '1rem',
  textTransform: 'uppercase',
  fontWeight: '700',
})
