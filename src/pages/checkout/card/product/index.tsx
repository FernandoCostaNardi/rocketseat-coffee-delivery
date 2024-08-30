import { Minus, Plus, Trash } from 'phosphor-react'
import Expresso from '../../../../assets/expresso.svg'
import {
  Actions,
  Button,
  Price,
  ProductContainer,
  ProductSeparator,
  Quantity,
  QuantityControl,
  RemoveButton,
  Title,
} from './style'

export function Product() {
  return (
    <>
      <ProductContainer>
        <img src={Expresso} alt="" />
        <Title>Expresso Tradicional</Title>
        <Price>R$ 9,90</Price>
        <Actions>
          <QuantityControl>
            <Button>
              <Minus size={16} weight="bold" />
            </Button>
            <Quantity>1</Quantity>
            <Button>
              <Plus size={16} weight="bold" />
            </Button>
          </QuantityControl>
          <RemoveButton>
            <Trash size={16} /> REMOVER
          </RemoveButton>
        </Actions>
      </ProductContainer>
      <ProductSeparator />
    </>
  )
}
