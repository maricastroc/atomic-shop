import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
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
