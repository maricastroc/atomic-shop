import { styled } from '..'

export const AboutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  width: '100%',
})

export const IntroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80%',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    gap: '4rem',
    maxWidth: 'auto',
    width: 'clamp(30rem, 80%, 52rem)',
  },

  '@media (min-width: 980px)': {
    gap: '5rem',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@media (min-width: 768px)': {
    width: '25rem',
  },

  '@media (min-width: 980px)': {
    width: '28rem',
  },
})

export const Heading = styled('h2', {
  marginTop: '2rem',
  color: '$purple300',
  fontSize: '1.35rem',
  fontWeight: '600',
  textAlign: 'center',

  '@media (min-width: 768px)': {
    textAlign: 'left',
    fontSize: '1.7rem',
  },
})

export const ParagraphsContainer = styled('div', {
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  textAlign: 'center',

  '@media (min-width: 768px)': {
    textAlign: 'left',
  },
})

export const Paragraph = styled('p', {
  color: '$gray300',
  fontSize: '1rem',
  lineHeight: '1.5rem',

  span: {
    backgroundColor: '$gray700',
    padding: '0.75rem',
    color: '$purple300',
    fontWeight: '600',
    lineHeight: '1.5rem',
  },

  '&:last-child': {
    marginTop: '1rem',
  },
})

export const LottieContainer = styled('div', {
  display: 'flex',
  width: 'clamp(10rem, 80%, 18rem)',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    width: 'clamp(10rem, 80%, 22rem)',
  },

  '@media (min-width: 980px)': {
    width: 'clamp(10rem, 80%, 25rem)',
  },
})

export const InfoContainer = styled('div', {
  marginTop: '8rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '3rem 0',

  backgroundColor: '$gray800',

  '@media (min-width: 480px)': {
    flexDirection: 'row',
    gap: '2rem',
  },

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    gap: '6rem',
  },
})

export const InfoItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@media (min-width: 1444px)': {
    flexDirection: 'row',
  },
})

export const InfoItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.1rem',
  opacity: '1',
  width: '10rem',

  p: {
    backgroundColor: '$gray800',
    borderRadius: '4px',
    color: '$gray300',
    padding: '0.5rem 0.75rem',
  },

  svg: {
    color: '$green500',
  },

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    width: '15rem',
  },
})
