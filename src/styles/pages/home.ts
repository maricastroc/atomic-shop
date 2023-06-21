import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export const Wrapper = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  width: 'clamp(18.75rem, 95%, 28rem)',
  borderRadius: '8px',
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: 500,

  '& .arrow': {
    width: '46px',
    height: '46px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fill: '#fff',
    cursor: 'pointer',
  },

  '& .arrow--left': {
    left: '5px',
  },

  '& .arrow--right': {
    left: 'auto',
    right: '5px',
  },

  '& .arrow--disabled': {
    color: 'rgba(255, 255, 255, 0.5)',
  },

  '@media (min-width: 680px)': {
    minHeight: 560,
    width: '90%',
  },

  '@media (min-width: 920px)': {
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    margin: '0 auto',
    minHeight: 560,
    width: '90%',
  },
})

export const HomeContainer = styled('main', {
  display: 'flex',
})

export const Product = styled('span', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    marginTop: '-4rem',
    objectFit: 'cover',
    scale: 0.8,
  },

  '@media (min-width: 680px)': {
    img: {
      scale: 1,
    },

    minWidth: 650,
  },

  '@media (min-width: 860px)': {
    minWidth: 540,
  },

  '@media (min-width: 1024px)': {
    '&:hover': {
      footer: {
        transform: 'translateY(0%)',
        opacity: 1,
      },
    },
  },
})

export const Footer = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '1.5rem 2rem',
  color: '$gray100',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  strong: {
    fontSize: '$md',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },

  '@media (min-width: 1024px)': {
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 200ms ease-in-out',
  },
})

export const HomeFooter = styled('footer', {
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$gray800',
  padding: '1rem 3rem',
  width: '100%',

  p: {
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '$gray300',
  },

  '@media (min-width: 480)': {
    padding: '1rem 1rem',
  },
})

export const FooterItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  gap: '0.7rem',
  padding: '0.4rem',
  fontSize: '0.8rem',
  color: '$gray100',
  backgroundColor: '$gray700',

  svg: {
    fontSize: '18px',
    color: '$purple500',
  },

  '@media (min-width: 1440px)': {
    padding: '0.6rem 0.9rem',
    fontSize: '0.875rem',
  },

  '&:hover': {
    filter: 'brightness(1.2)',
    transition: 'all 200ms',
  },
})

export const FooterLogos = styled('div', {
  display: 'flex',
  gap: '1rem',

  svg: {
    fontSize: '28px',
    color: '$purple500',
  },
})
