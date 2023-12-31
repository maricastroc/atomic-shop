import { styled } from '..'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export const ProductContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  width: '90%',

  '@media (min-width: 980px)': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
    gap: '6rem',

    maxWidth: 1080,
    margin: '1rem auto 0',
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'clamp(18rem, 80vw, 23rem)',
  height: '23rem',
  margin: '1rem auto 0',

  img: {
    scale: 0.7,
  },

  '@media (min-width: 480px)': {
    margin: '2rem auto',
    scale: 1.2,
    img: {
      objectFit: 'cover',
    },
  },

  '@media (min-width: 680px)': {
    margin: '4rem auto',
    scale: 1.3,
  },

  '@media (min-width: 980px)': {
    margin: '9rem auto',
    scale: 1.4,
    width: '100%',
    maxWidth: '23rem',
    minHeight: '26rem',
    img: {
      objectFit: 'cover',
    },
  },
})

export const ProductDetails = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  textAlign: 'center',

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

  '@media (min-width: 980px)': {
    minWidth: 400,
    textAlign: 'left',
  },
})

export const OptionsContainer = styled('div', {
  margin: '4rem 0 5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  width: '100%',

  select: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage: 'url("/assets/arrow_down.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundPositionX: '5.5rem',
    marginRight: '10px',
    cursor: 'pointer',
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

  '@media (min-width: 680px)': {
    select: {
      width: '10rem',
      padding: '0.6rem 0.7rem',
      backgroundPositionX: '8.5rem',
      fontSize: '1.05rem',
    },
  },

  '@media (min-width: 980px)': {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
})

export const SelectContainer = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  label: {
    color: '$gray300',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
})

export const QuantityWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

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
  padding: '0.3rem 0.5rem',
  borderRadius: '16px',
  width: '7rem',

  span: {
    color: '$gray300',
    fontWeight: 600,
  },

  '@media (min-width: 680px)': {
    padding: '0.4rem 0.5rem',
    borderRadius: '16px',
    width: '10rem',
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
    boxShadow: 'none',
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

  '&:focus': {
    boxShadow: 'none',
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

  '&:focus': {
    boxShadow: 'none',
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
  padding: '1rem',
  width: '100%',

  p: {
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '$gray300',
  },

  '@media (min-width: 480px)': {
    padding: '1rem 3rem',
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
