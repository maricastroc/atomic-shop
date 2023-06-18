import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  console.log(JSON.stringify(query))
  return (
    <h1>Product</h1>
  )
}
