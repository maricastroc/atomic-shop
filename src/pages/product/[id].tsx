import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  console.log(JSON.stringify(query))
  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src="https://files.stripe.com/links/MDB8YWNjdF8xTktDZWVCZmsyRjZFcnpLfGZsX3Rlc3RfeVg4TEFJaTFCMUVqYnhoeHpRRE5ieEJF00xE6DGg1y"
          alt=""
          width={400}
          height={480}
        />
      </ImageContainer>
      <ProductDetails>
        <h1>T-Shirt</h1>
        <span>$ 25.60</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla
          ut neque nisi et. Dolorem reprehenderit necessitatibus error quis,
          esse officia voluptatum debitis provident veritatis in delectus?
          Perspiciatis, nihil possimus.
        </p>
        <button>Shop Now</button>
      </ProductDetails>
    </ProductContainer>
  )
}
