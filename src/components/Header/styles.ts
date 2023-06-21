import { styled } from '@/src/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  margin: '0 auto',
  minWidth: '90%',

  img: {
    width: '7rem',
  },

  '@media (min-width: 680px)': {
    img: {
      width: '9.5rem',
    },
  },

  '@media (min-width: 1440px)': {
    minWidth: 'calc(100vw - ((100vw - 1180px) / 2))',

    img: {
      marginLeft: '0',
    },
  },
})

export const LocationContainer = styled('div', {
  cursor: 'default',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  gap: '0.3rem',
  padding: '0.4rem',
  fontSize: '0.8rem',
  color: '$gray100',
  backgroundColor: '$gray800',

  '& .mapPin_icon': {
    color: '$purple500',
  },

  '@media (min-width: 1440px)': {
    padding: '0.75rem 0.9rem',
    fontSize: '0.875rem',
  },
})

export const ItemsContainer = styled('div', {
  display: 'flex',
  alignItems: 'strech',
  gap: '0.5rem',

  a: {
    backgroundColor: '$gray800',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
  },

  '@media (min-width: 340px)': {
    gap: '1rem',
  },
})

export const ButtonShop = styled('button', {
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '0.8rem 0.5rem',
  backgroundColor: '$gray800',
  border: 'none',
  borderRadius: '8px',

  svg: {
    color: '$purple500',
    fontSize: '16px',
  },

  '@media (min-width: 340px)': {
    svg: {
      fontSize: '20px',
    },
  },

  '@media (min-width: 1440px)': {
    padding: '0.625rem',
    fontSize: '0.875rem',
  },

  '&:hover': {
    filter: 'brightness(1.6)',
    transition: 'all 200ms',
  },
})

export const ButtonShopLabel = styled('span', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '1.2rem',
  height: '1.2rem',
  zIndex: 10,
  top: '-22%',
  left: '75%',
  borderRadius: '50%',
  color: '$gray100',
  backgroundColor: '$purple700',

  p: {
    fontSize: '0.75rem',
  },
})

export const ButtonShopIcon = styled('img', {
  width: '1.2rem',

  '@media (min-width: 1440px)': {
    width: '1.4rem',
  },
})
