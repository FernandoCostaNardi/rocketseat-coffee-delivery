import { Minus, Plus } from 'phosphor-react'
import { Button, Quantity, InputNumberContainer } from './style'

interface InputNumberProps {
  height: number
  quantity?: number
}

export function InputNumber({ height }: InputNumberProps) {
  return (
    <InputNumberContainer data-state={height}>
      <Button>
        <Minus size={16} weight="bold" />
      </Button>
      <Quantity>1</Quantity>
      <Button>
        <Plus size={16} weight="bold" />
      </Button>
    </InputNumberContainer>
  )
}
