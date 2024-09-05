import { Trash } from 'phosphor-react'
import { Product as ProductInterface } from './../../../../interfaces/Product'
import {
  Actions,
  Price,
  ProductContainer,
  ProductSeparator,
  RemoveButton,
  Title,
} from './style'
import { InputNumber } from '../../../../components/form/input-number'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContextProvider'

interface ProductProps {
  product: ProductInterface
  quantity: number
}

export function Product({ product, quantity }: ProductProps) {
  const { IncrementItemQuantity, DecrementItemQuantity, excludeItem } =
    useContext(CartContext)

  function incrementQuantity() {
    IncrementItemQuantity(product.id)
  }

  function decrementQuantity() {
    DecrementItemQuantity(product.id)
  }

  function handleExcludeItem() {
    excludeItem(product.id)
  }

  return (
    <>
      <ProductContainer>
        <img src={product.image} alt="" />
        <Title>{product.title}</Title>
        <Price>
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(product.price * quantity)}
        </Price>
        <Actions>
          <InputNumber
            height={32}
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
          <RemoveButton>
            <Trash size={16} onClick={handleExcludeItem} />
          </RemoveButton>
        </Actions>
      </ProductContainer>
      <ProductSeparator />
    </>
  )
}
