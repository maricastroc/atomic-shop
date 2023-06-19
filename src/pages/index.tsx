import { Arrow } from '../components/Arrow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

import {
  Container,
  Footer,
  FooterItem,
  FooterLogos,
  HomeContainer,
  HomeFooter,
  Product,
  Wrapper,
} from '@/src/styles/pages/home'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Link from 'next/link'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }[]
}

export default function Home({ products }: HomeProps) {
  console.log(JSON.stringify(products.map((product) => product.imageUrl)))
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [perView, setPerView] = useState(3)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView,
      spacing: 38,
    },
  })

  const handleResize = () => {
    if (window.innerWidth < 920) {
      setPerView(1)
    } else if (window.innerWidth < 1440) {
      setPerView(2)
    } else {
      setPerView(3)
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Container>
        <Wrapper className="navigation-wrapper">
          <HomeContainer ref={sliderRef} className="keen-slider">
            {products.map((product) => {
              return (
                <Link
                  href={`product/${product.id}`}
                  key={product.id}
                  prefetch={false}
                >
                  <Product className="keen-slider__slide number-slide1">
                    <Image
                      src={product.imageUrl}
                      width={400}
                      height={480}
                      alt=""
                    />
                    <Footer>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </Footer>
                  </Product>
                </Link>
              )
            })}
          </HomeContainer>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={() => instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={() => instanceRef.current?.next()}
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </Wrapper>
        <HomeFooter>
          <Link href="/about">
            <FooterItem>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>About Us</p>
            </FooterItem>
          </Link>
          <FooterLogos>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </FooterLogos>
        </HomeFooter>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
