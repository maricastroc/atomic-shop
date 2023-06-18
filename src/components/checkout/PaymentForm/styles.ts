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
  gap: '0.5rem',
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

export const OptionsSection = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  '& .checked': {
    backgroundColor: '$purple500',
    borderColor: '$purple700',
  },

  '@media (min-width: 650px)': {
    flexDirection: 'row',
  },
  '@media (min-width: 1440px)': {
    flexDirection: 'row',
  },
})

export const Option = styled('button', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '0.8rem',
  backgroundColor: '$purple700',
  color: '$gray300',
  border: 'solid 2px transparent',
  borderRadius: '8px',
  transition: '300ms',

  '&:hover': {
    filter: 'brightness(0.8)',
  },

  '&:focus': {
    boxShadow: 'none',
  },
  '@media (min-width: 1440px)': {
    width: '33%',
  },
})

export const OptionLabel = styled('p', {
  color: '$gray100',
  fontSize: '0.85rem',
  textTransform: 'uppercase',
})

export const IconContainer = styled('span', {
  svg: {
    marginTop: '0.2rem',
    color: '$purple300',
  },
})
