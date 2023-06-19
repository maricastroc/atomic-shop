import Lottie from 'lottie-react'
import rocketAnimation from '../../../public/lf20_ttz7k6cj.json'
import {
  AboutContainer,
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
import { Package, Recycle, ShoppingCart, Truck } from 'phosphor-react'

export default function AboutUs() {
  return (
    <AboutContainer>
      <IntroSection>
        <LottieContainer>
          <Lottie animationData={rocketAnimation} loop={true} />
        </LottieContainer>
        <TextContainer>
          <Heading>WE&apos;RE ATOMICS!</Heading>
          <ParagraphsContainer>
            <Paragraph>
              It was a sunny day. We were seated at a pretentious Melbourne cafe
              eating $32 avocado toast.
            </Paragraph>
            <Paragraph>
              Here was a group of hipsters each sporting immaculately groomed
              beards.
            </Paragraph>
            <Paragraph>
              Sipping on their 3/4 almond chai lattes, they lamented at the lack
              of awesome quality graphic t-shirts available
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
        </TextContainer>
      </IntroSection>
      <InfoContainer>
        <InfoItemsContainer>
          <InfoItem>
            <Truck size={36} />
            <p>Made-to-order</p>
          </InfoItem>
          <InfoItem>
            <Recycle size={36} />
            <p>Eco-friendly production</p>
          </InfoItem>
        </InfoItemsContainer>
        <InfoItemsContainer>
          <InfoItem>
            <ShoppingCart size={36} />
            <p>Free exchanges</p>
          </InfoItem>
          <InfoItem>
            <Package size={36} />
            <p>Free shipping over $150</p>
          </InfoItem>
        </InfoItemsContainer>
      </InfoContainer>
    </AboutContainer>
  )
}
