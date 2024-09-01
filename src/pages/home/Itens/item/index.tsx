import ImageCoffee from '../../../../assets/expresso.svg'
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

export function Item() {
  return (
    <ItemContainer>
      <ImageItem>
        <img src={ImageCoffee} alt="" />
      </ImageItem>
      <Tags>
        <Tag>TRADICIONAL</Tag>
        <Tag>COM LEITE</Tag>
      </Tags>
      <Title>Expresso Tradicional</Title>
      <Description>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Description>
      <CartContainer>
        <Price>
          <span>R$</span>
          <p>9,90</p>
        </Price>
        <InputNumberContainer>
          <InputNumber height={38} />
        </InputNumberContainer>
        <ShoppingCard kind="purple" />
      </CartContainer>
    </ItemContainer>
  )
}
