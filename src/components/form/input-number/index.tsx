import { Minus, Plus } from 'phosphor-react'
import { Button, Quantity, InputNumberContainer } from './style'

interface InputNumberProps {
  height: number
  quantity?: number
  incrementQuantity?: () => void
  decrementQuantity?: () => void
}

export function InputNumber({
  height,
  quantity,
  incrementQuantity,
  decrementQuantity,
}: InputNumberProps) {
  return (
    <InputNumberContainer data-state={height}>
      <Button onClick={decrementQuantity}>
        <Minus size={16} weight="bold" />
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button onClick={incrementQuantity}>
        <Plus size={16} weight="bold" />
      </Button>
    </InputNumberContainer>
  )
}
