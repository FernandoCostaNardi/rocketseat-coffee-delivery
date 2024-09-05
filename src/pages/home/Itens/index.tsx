import productData from '../../../../products.json'
import { Product } from '../../../interfaces/Product'
import { Item } from './item'
import { ItemsContainer, ItemsTitle, ListItemContainer } from './style'

export function Items() {
  const products: Product[] = productData

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
