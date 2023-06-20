import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'clamp(10rem, 90vw, 50rem)',
  padding: '1.5rem',
  backgroundColor: '$gray800',
  borderRadius: '12px',

  '@media (min-width: 1440px)': {
    marginTop: '2rem',
    padding: '2.5rem',
    width: '100%',
  },
})

export const TextSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  svg: {
    color: '$purple500',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
})

export const Heading = styled('h2', {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '$gray300',

  '@media (min-width: 1440px)': {
    fontSize: '1rem',
  },
})

export const Paragraph = styled('p', {
  marginTop: '0.3rem',
  fontSize: '0.9rem',
  lineHeight: '130%',
  color: '$gray300',

  '@media (min-width: 1440px)': {
    fontSize: '0.875rem',
  },
})

export const IconContainer = styled('span', {
  svg: {
    color: '$purple500',
    fontSize: '26px',
  },
})

export const UserDetailsContent = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1rem',
})

export const Input = styled('input', {
  padding: '0.75rem',
  color: '$gray100',
  backgroundColor: '$gray700',
  border: 'none',
  borderRadius: '8px',
  width: '100%',
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  '@media (min-width: 1440px)': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
})

export const InputItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  width: '100%',

  span: {
    color: '$purple300',
    fontSize: '0.85rem',
  },
})

export const CheckboxContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1rem',

  button: {
    cursor: 'pointer',
    backgroundColor: '$gray300',
    width: '15px',
    height: '15px',
    borderRadius: '4px',
    border: 'none',

    '&:focus': {
      boxShadow: 'none',
    },
  },

  label: {
    opacity: 0.8,
    color: '$gray300',
    fontSize: '0.9rem',
  },

  svg: {
    color: '$purple700',
  },
})
