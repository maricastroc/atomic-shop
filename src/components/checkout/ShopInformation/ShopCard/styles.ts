import { styled, keyframes } from '@stitches/react'

const fadeOutLeft = keyframes({
  '0%': { opacity: 1, transform: 'translateX(0)' },
  '100%': { opacity: 0.2, transform: 'translateX(-50px)' },
})

export const ShopCardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray800',
  transition: '300ms',

  '&.remove-coffee': {
    animation: `${fadeOutLeft} 1s linear forwards`,
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  width: '100%',
})

export const CardImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  padding: '0.5rem 1.2rem',
})

export const CardImage = styled('img', {
  width: '4rem',
  height: 'auto',
})

export const ShopCardText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100%',

  '@media (min-width: 480px)': {
    width: '18rem',
  },

  '@media (min-width: 1440px)': {
    width: '100%',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',

  '@media (min-width: 480px)': {
    justifyContent: 'space-between',
    display: 'flex',
  },

  '@media (min-width: 1440px)': {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
})

export const CardLabel = styled('p', {
  color: '$gray100',
  fontSize: '1rem',
  width: '100%',

  span: {
    display: 'none',
  },

  '@media (min-width: 480px)': {
    width: 'auto',

    span: {
      marginTop: '0.3rem',
      display: 'block',
      color: '$gray300',
      opacity: 0.8,
      fontSize: '0.9rem',
    },
  },

  '@media (min-width: 1440px)': {
    width: 'auto',
    fontSize: '1.05rem',
  },
})

export const CardPrice = styled('strong', {
  fontWeight: '700',
  color: '$gray100',
  fontSize: '1.1rem',
})

export const ButtonsContainer = styled('div', {
  marginTop: '0.5rem',
  display: 'flex',
  gap: '0.5rem',
})

export const QuantityContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$gray700',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.3rem 0.5rem',
  borderRadius: '16px',
  width: '7rem',

  span: {
    color: '$gray300',
    fontWeight: 600,
  },
})

export const QuantityButton = styled('button', {
  cursor: 'pointer',
  display: 'flex',
  backgroundColor: '$purple700',
  filter: 'brightness(1.3)',
  borderRadius: '50%',
  border: 'none',
  padding: '0.3rem',

  svg: {
    color: '$gray300',
    fontSize: '14px',
  },

  '&:focus': {
    boxShadow: 'none',
  },

  '&:hover': {
    filter: 'brightness(1.6)',
  },
})
