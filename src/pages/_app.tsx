import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import LogoImg from '../../public/assets/logo-2.svg'
import { Container, Header } from '@/src/styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
