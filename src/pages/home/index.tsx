import { HomeContainer, HomeProductContainer } from './style'
import productsData from './../../../products.json'
import { Banner } from './banner'
import { Items } from './Itens'

interface product {
  id: number
  image: string
  tags: string[]
  title: string
  subTitle: string
  price: string
}

interface ListProducts {
  products: product[]
}

export function Home() {
  const productList: ListProducts = {
    products: productsData as product[],
  }

  return (
    <HomeContainer>
      <Banner />
      <HomeProductContainer>
        <Items products={productList.products} />
      </HomeProductContainer>
    </HomeContainer>
  )
}
