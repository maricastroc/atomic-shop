import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { Container } from '@/src/styles/pages/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faWhatsapp,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { ShopListContextProvider } from './contexts/shopList'
import { Header } from '../components/Header'

globalStyles()

library.add(fas, faFacebookSquare, faWhatsapp, faInstagram, faLinkedinIn)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopListContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ShopListContextProvider>
  )
}
