import { styled } from '..'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignItems: 'stretch',
  justifyContent: 'center',
  gap: '4rem',

  maxWidth: 1080,
  margin: '1rem auto 0',
})

export const ImageContainer = styled('div', {
  width: '100%',
  minWidth: 576,
  minHeight: 560,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 400,
  justifyContent: 'space-between',

  '> div': {
    '> span': {
      marginTop: '1rem',
      display: 'block',
      fontSize: '$2xl',
      color: '$green300',
    },
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',

  select: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage: 'url("/assets/arrow_down.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundPositionX: '5.5rem',
    marginRight: '10px',
    backgroundSize: '14px',
    paddingRight: '20px',
    backgroundColor: '$gray700',
    padding: '0.7rem',
    borderRadius: '16px',
    border: 'none',
    color: '$gray300',
    fontWeight: 600,
    width: '7rem',
  },
})

export const SelectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',

  label: {
    color: '$gray300',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
})

export const QuantityWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',

  label: {
    color: '$gray300',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
})

export const QuantityContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$gray700',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.4rem 0.5rem',
  borderRadius: '16px',
  width: '10rem',

  span: {
    color: '$gray300',
    fontWeight: 600,
  },
})

export const QuantityButton = styled('button', {
  cursor: 'pointer',
  display: 'flex',
  backgroundColor: '$purple700',
  borderRadius: '50%',
  border: 'none',
  padding: '0.3rem',
  filter: 'brightness(1.3)',

  svg: {
    color: '$gray300',
    fontSize: '16px',
  },

  '&:focus': {
    boxShadow: 'none',
  },

  '&:hover': {
    filter: 'brightness(1.6)',
  },
})

export const ButtonContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& .shopBtn': {
    fontSize: '28px',
    marginRight: '0.7rem',
  },

  button: {
    alignSelf: 'flex-end',
    width: '100%',
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.25rem',

    '&:hover': {
      backgroundColor: '$green300',
    },

    '&:focus': {
      boxShadow: 'none',
    },
  },
})

export const ProductDescription = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  fontSize: '1rem',
  color: '$gray300',
  opacity: 0.8,
  lineHeight: '1.5rem',
})

export const ButtonsPressed = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.8rem',

  a: {
    textDecoration: 'none',
  },
})

export const BackToHome = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray800',
  padding: '0.5rem 0.75rem',
  borderRadius: '4px',
  gap: '0.5rem',
  textAlign: 'left',
  width: '12rem',

  p: {
    color: '$purple500',
    fontWeight: '600',
  },

  svg: {
    color: '$purple500',
    fontSize: '18px',
  },

  '&:hover': {
    filter: 'brightness(1.4)',
  },
})

export const ViewCart = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  backgroundColor: '$gray800',
  padding: '0.5rem 0.75rem',
  borderRadius: '4px',
  gap: '0.5rem',
  width: '12rem',

  p: {
    color: '$green500',
    fontWeight: '600',
    filter: 'brightness(1.3)',
  },

  svg: {
    color: '$green500',
    fontSize: '18px',
  },

  '&:hover': {
    filter: 'brightness(1.4)',
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
  padding: '1rem 5rem',
  width: '100%',

  p: {
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '$gray300',
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
