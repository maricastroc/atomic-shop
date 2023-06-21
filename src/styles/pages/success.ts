import { styled } from '..'

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',
})

export const ItemsContainer = styled('div', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '$gray800',
  borderRadius: 12,
  padding: '2rem',
  gap: '1.5rem',
})

export const Separator = styled('span', {
  height: '0.1rem',
  backgroundColor: '$gray700',
  width: '100%',
})

export const ItemContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
})

export const ItemTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',

  p: {
    fontWeight: 600,
    color: '$gray300',
  },

  span: {
    fontWeight: 600,
    color: '$green500',
  },
})

export const ItemWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '7rem',
  height: '7rem',
  borderRadius: '12px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.4rem',

  img: {
    marginTop: '-0.8rem',
  },
})

export const Heading = styled('h2', {
  fontSize: '2rem',
  color: '$gray100',
  fontWeight: 600,
})

export const Paragraph = styled('p', {
  fontSize: '1.1rem',
  color: '$gray300',
  fontWeight: 400,
  marginTop: '0.8rem',

  span: {
    color: '$gray300',
    fontWeight: 600,
  },
})

export const BackToHome = styled('button', {
  cursor: 'pointer',
  margin: '2.5rem auto',
  fontSize: '1rem',
  backgroundColor: '$green500',
  color: '$gray100',
  border: 'none',
  padding: '1rem',
  borderRadius: '8px',
  fontWeight: 600,

  '&:hover': {
    filter: 'brightness(1.3)',
  },
})
