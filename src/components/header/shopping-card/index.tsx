import { ShoppingCart } from 'phosphor-react'
import { ShoppingCardContainer } from './style'

interface ShoppingCardProps {
  kind: string
  quantity?: number
}

export function ShoppingCard({ kind }: ShoppingCardProps) {
  return (
    <ShoppingCardContainer data-state={kind}>
      <ShoppingCart size={24} weight="fill" />
    </ShoppingCardContainer>
  )
}
