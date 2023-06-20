import { styled, css } from '@/src/styles'

export const AddressContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'clamp(10rem, 90vw, 50rem)',
  padding: '1.5rem',
  borderRadius: '12px',
  backgroundColor: '$gray800',

  '@media (min-width: 1440px)': {
    padding: '2.5rem',
    width: '100%',
  },
})

export const AddressText = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
})

export const IconContainer = styled('span', {
  svg: {
    color: '$purple500',
    fontSize: '26px',
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

const inputStyles = css({
  padding: '0.75rem',
  color: '$gray100',
  backgroundColor: '$gray700',
  border: 'none',
  borderRadius: '8px',
})

export const Input = styled('input', {
  ...inputStyles,
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

export const AddressInfoContent = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  '@media (min-width: 1440px)': {
    flexDirection: 'row',
    width: '100%',

    '& [name="zip"], & [name="number"], & [name="number"]': { width: '33%' },

    '& [name="neighborhood"]': {
      width: '33%',
    },

    '& [name="complement"]': {
      width: '67%',
    },

    '& [name="city"]': {
      width: '52%',
    },

    '& [name="uf"]': {
      width: '15%',
    },
  },
})

export const InputItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  span: {
    color: '$purple300',
    fontSize: '0.85rem',
  },
})

export const ComplementContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0',
  color: '$gray400',
  backgroundColor: '$gray700',
  borderRadius: '8px',
  width: '100%',

  '& [name="complement"]': {
    paddingLeft: '0.75rem',
    minWidth: '93%',
    border: 'none',
  },

  span: {
    position: 'absolute',
    top: '35%',
    left: '73%',
    alignSelf: 'flex-end',
    fontSize: '0.75rem',
    fontStyle: 'italic',
    lineHeight: '130%',
    color: '$gray400',

    '@media (min-width: 1440px)': {
      left: '83%',
    },
  },

  '@media (min-width: 1440px)': {
    width: '67%',
  },
})
