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
  },
})

export const CardLabel = styled('p', {
  color: '$gray100',
  fontSize: '1rem',
  width: '100%',

  '@media (min-width: 480px)': {
    width: 'auto',
  },
  '@media (min-width: 1440px)': {
    width: 'auto',
  },
})

export const CardPrice = styled('strong', {
  fontWeight: '700',
  color: '$gray100',
  fontSize: '1.05rem',
})

export const ButtonsContainer = styled('div', {
  marginTop: '0.5rem',
  display: 'flex',
  gap: '0.5rem',
})

export const RemoveButton = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '$base-button',
  alignSelf: 'flex-end',
  transition: '300ms',

  svg: {
    color: '$purple500',
  },

  '&:hover': {
    filter: 'brightness(1.2)',
    transition: 'all 200ms',
  },
})

export const RemoveLabel = styled('p', {
  fontWeight: 600,
  fontSize: '0.9rem',
  color: '$purple500',
})
