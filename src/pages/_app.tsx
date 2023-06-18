import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import LogoImg from '../../public/assets/logo-2.svg'
import { Container, Header, LocationContainer } from '@/src/styles/pages/app'
import Image from 'next/image'
import { useLocation } from '../hooks/useLocation'
import { MapPin } from 'phosphor-react'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { city, uf } = useLocation()

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={LogoImg} alt="" />
        </Link>
        <LocationContainer>
          <MapPin size={22} weight="fill" className="mapPin_icon" />
          <p>
            {city} {uf}
          </p>
        </LocationContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
