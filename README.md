# Atomic-Shop
![atomic-shop](https://github.com/maricastroc/atomic-shop/assets/121824373/03212826-a852-4dae-802a-a76d4440b82d)


## 📚 Project Description

The project involves a marketplace application that utilizes the Stripe API for product registration and checkout purposes. This enables us to simulate the user experience, starting from the catalog page and concluding with the redirection to the success page after the checkout process is completed. To accomplish this, a new API has been developed within the application to furnish Stripe with the requisite checkout details and facilitate dynamic redirection to the success page. The application includes the following features.

- Viewing products from the Home page.
- Accessing company details through the About Us route.
- Exploring selected product details, including the option to choose size and quantity for adding items to the shopping cart.
- Providing personal information to finalize the purchase.
- User is redirected to the Stripe checkout page.
- Upon completing the checkout process, the user is dynamically redirected to a success page.


## 📌 What did I learn?

This was my first project in Next.js, and it provided me with the opportunity to utilize FileSystem Routing for generating new routes within the application. Additionally, I employed the Stitches style library, which offers support for server-side rendering and pre-bundling capabilities.

I gained knowledge on how to handle the `getServerSideProps` and `getStaticProps` functions to fetch data from the server and pass it as props to the rendered components.

```typescript
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price
  return {
    props: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount! / 100),
      description: product.description,
      defaultPriceId: price.id,
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
```

I also developed a custom API to supply Stripe with the necessary purchase information for checkout and dynamically redirect the user to the checkout page upon completing the purchase.

Furthermore, I familiarized myself with the new Image and Link components provided by Next.js, which significantly contribute to the application's performance. I also practiced utilizing hooks like `useDebounce` and `useMemo` to enhance performance. Additionally, I created a custom useLocation hook utilizing the Geolocation API.

## 🔍 Links
[Preview Site](https://maricastroc-atomic-shop.netlify.app/)

## 💻 My Process
### Built with:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Next.Js](https://nextjs.org/)
- [Stripe API](https://stripe.com/docs/api)
- [Stitches](https://stitches.dev/)
- [axios](https://axios-http.com/docs/intro)
- [keen-slider](https://keen-slider.io/)
- [font-awesome](https://fontawesome.com/)
- [lottie-react](https://lottiereact.com/)
- [radix-ui](https://www.radix-ui.com/)
- [geolocation-API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
<br/>

## ℹ️ How to run the application?

> Clone the repository:

```bash
git clone https://github.com/maricastroc/github-blog
```

> Install the dependencies:

```bash
npm install
```

> Start the service:

```bash
npm run dev
```

> ⏩ Access [http://localhost:3000](http://localhost:3000) to view the web application.
