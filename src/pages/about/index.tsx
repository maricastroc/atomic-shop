import Lottie from 'lottie-react'
import rocketAnimation from '../../../public/lottie/lf20_ttz7k6cj.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AboutContainer,
  BackToHome,
  Heading,
  InfoContainer,
  InfoItem,
  InfoItemsContainer,
  IntroSection,
  LottieContainer,
  Paragraph,
  ParagraphsContainer,
  TextContainer,
} from '@/src/styles/pages/about'
import {
  faAngleLeft,
  faCartShopping,
  faMoneyCheckDollar,
  faRecycle,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Head from 'next/head'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Atomic Shop</title>
      </Head>
      <AboutContainer>
        <IntroSection>
          <LottieContainer>
            <Lottie animationData={rocketAnimation} loop={true} />
          </LottieContainer>
          <TextContainer>
            <Heading>WE&apos;RE ATOMICS!</Heading>
            <ParagraphsContainer>
              <Paragraph>
                It was a sunny day. We were seated at a pretentious Melbourne
                cafe eating $32 avocado toast.
              </Paragraph>
              <Paragraph>
                Here was a group of hipsters each sporting immaculately groomed
                beards.
              </Paragraph>
              <Paragraph>
                Sipping on their 3/4 almond chai lattes, they lamented at the
                lack of awesome quality graphic t-shirts available
              </Paragraph>
              <Paragraph>
                They all agreed something needed to be done urgently. The
                excitement was palpable.
              </Paragraph>
              <Paragraph>
                Naturally, we overheard them and appropriated the idea shortly
                after.
              </Paragraph>
              <Paragraph>
                <span>And thus, Atomic was born.</span>
              </Paragraph>
            </ParagraphsContainer>
            <Link href="/">
              <BackToHome>
                <FontAwesomeIcon icon={faAngleLeft} />
                <p>Back to Home</p>
              </BackToHome>
            </Link>
          </TextContainer>
        </IntroSection>
        <InfoContainer>
          <InfoItemsContainer>
            <InfoItem>
              <FontAwesomeIcon icon={faTruckFast} />
              <p>Made-to-order</p>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faRecycle} />
              <p>Eco-friendly production</p>
            </InfoItem>
          </InfoItemsContainer>
          <InfoItemsContainer>
            <InfoItem>
              <FontAwesomeIcon icon={faCartShopping} />
              <p>Free exchanges</p>
            </InfoItem>
            <InfoItem>
              <FontAwesomeIcon icon={faMoneyCheckDollar} />
              <p>Free shipping over $150</p>
            </InfoItem>
          </InfoItemsContainer>
        </InfoContainer>
      </AboutContainer>
    </>
  )
}
