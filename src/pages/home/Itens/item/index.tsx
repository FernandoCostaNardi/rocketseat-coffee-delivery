import {
  Description,
  ImageItem,
  ItemContainer,
  Price,
  Tags,
  Tag,
  Title,
  CartContainer,
  InputNumberContainer,
} from './style'
import { InputNumber } from '../../../../components/form/input-number'
import { ShoppingCard } from '../../../../components/header/shopping-card'
import { Product } from '../../../../interfaces/Product'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../context/CartContextProvider'

interface ItemProps {
  product: Product
}

export function Item({ product }: ItemProps) {
  const [quantity, setquantity] = useState(1)
  const { addItem } = useContext(CartContext)

  function incrementQuantity() {
    setquantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setquantity((state) => state - 1)
    }
  }

  function handleAddProduct() {
    addItem({ productId: product.id, quantity })
  }

  return (
    <ItemContainer>
      <ImageItem>
        <img src={product.image} alt="" />
      </ImageItem>
      <Tags>
        {product.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Title>{product.title}</Title>
      <Description>
        <p>{product.subTitle}</p>
      </Description>
      <CartContainer>
        <Price>
          <span>R$</span>
          <p>
            {new Intl.NumberFormat('pt-br', {
              style: 'decimal',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(product.price)}
          </p>
        </Price>
        <InputNumberContainer>
          <InputNumber
            height={38}
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        </InputNumberContainer>
        <ShoppingCard
          kind="purple"
          productId={product.id}
          handleAddProduct={handleAddProduct}
        />
      </CartContainer>
    </ItemContainer>
  )
}
