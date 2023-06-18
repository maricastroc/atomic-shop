import { styled } from "..";

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
  justifyContent: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  img: {
    width: '9.5rem',
  },
  
  '@media (min-width: 920px)': {
    justifyContent: 'flex-start',
    
    img: {
      marginLeft: '5rem',
    }
  },

  '@media (min-width: 1440px)': {
    justifyContent: 'flex-start',
    
    img: {
      marginLeft: '0',
    }
  },
})