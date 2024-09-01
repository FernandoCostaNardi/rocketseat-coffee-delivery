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

interface ProductProps {
  id: number
  image: string
  tags: string[]
  title: string
  subTitle: string
  price: string
}

export function Item({ product }: { product: ProductProps }) {
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
          <p>{product.price}</p>
        </Price>
        <InputNumberContainer>
          <InputNumber height={38} />
        </InputNumberContainer>
        <ShoppingCard kind="purple" />
      </CartContainer>
    </ItemContainer>
  )
}
