import { Trash } from 'phosphor-react'
import Expresso from '../../../../assets/expresso.svg'
import {
  Actions,
  Price,
  ProductContainer,
  ProductSeparator,
  RemoveButton,
  Title,
} from './style'
import { InputNumber } from '../../../../components/form/input-number'

export function Product() {
  return (
    <>
      <ProductContainer>
        <img src={Expresso} alt="" />
        <Title>Expresso Tradicional</Title>
        <Price>R$ 9,90</Price>
        <Actions>
          <InputNumber height={32} />
          <RemoveButton>
            <Trash size={16} /> REMOVER
          </RemoveButton>
        </Actions>
      </ProductContainer>
      <ProductSeparator />
    </>
  )
}
