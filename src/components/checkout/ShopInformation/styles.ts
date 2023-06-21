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
    width: 'clamp(10rem, 90vw, 50rem)',
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

export const EmptyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  width: '100%',
  alignItems: 'center',
  backgroundColor: '$gray800',
  borderRadius: '8px',
  paddingBottom: '3rem',
})

export const TextEmptyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  p: {
    fontWeight: 600,
    color: '$gray100',
    fontSize: '1.1rem',
    lineHeight: '1.5rem',
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },

  a: {
    color: '$purple300',

    '&:hover': {
      filter: 'brightness(1.3)',
    },
  },
})

export const LottieContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'clamp(10rem, 80%, 18rem)',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    width: 'clamp(10rem, 80%, 22rem)',
  },

  '@media (min-width: 980px)': {
    width: 'clamp(10rem, 80%, 25rem)',
    scale: 1.2,
  },
})
