import { styled } from '@stitches/react'

export const ShopInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  a: {
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
  },
})

export const Heading = styled('h2', {
  color: '$gray100',
  fontSize: '1.25rem',
  margin: '1.5rem 0 0.3rem 0.3rem',

  '@media (min-width: 1440px)': {
    fontSize: '1.125rem',
    marginTop: '0',
  },
})

export const ShopInfoBox = styled('div', {
  width: 'clamp(10rem, 90vw, 50rem)',
  padding: '1rem',
  borderRadius: '12px',

  backgroundColor: '$gray800',

  '@media (min-width: 480px)': {
    padding: '2.5rem',
  },

  '@media (min-width: 1440px)': {
    padding: '2.5rem',
    width: '28rem',
  },
})

export const ShopCardsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Separator = styled('span', {
  width: '100%',
  height: '0.02rem',
  backgroundColor: '$gray700',
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
  color: '$gray100',
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
})

export const ConfirmButtonLabel = styled('p', {
  width: '100%',
  textAlign: 'center',
  color: '$gray100',
  fontSize: '1rem',
  textTransform: 'uppercase',
  fontWeight: '700',
})

export const Error = styled('div', {
  width: '100%',
  p: {
    color: '$purple500',
    textAlign: 'end',
  },
})
