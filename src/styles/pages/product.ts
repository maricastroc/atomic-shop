import { styled } from '..'

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

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  '> span': {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})

export const ProductDescription = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  p: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.05rem',
    color: '$gray300',
  },

  span: {
    width: '0.4rem',
    height: '2px',
    fontSize: '1.05rem',
    backgroundColor: '$green300',
    marginRight: '0.6rem',
  },
})
