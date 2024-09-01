import { Item } from './item'
import { ItemsContainer, ItemsTitle, ListItemContainer } from './style'

interface ListProducts {
  products: {
    id: number
    image: string
    tags: string[]
    title: string
    subTitle: string
    price: string
  }[]
}

export function Items({ products }: ListProducts) {
  return (
    <ItemsContainer>
      <ItemsTitle>Nossos cafés</ItemsTitle>
      <ListItemContainer>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ListItemContainer>
    </ItemsContainer>
  )
}
