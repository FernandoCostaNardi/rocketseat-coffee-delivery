import { ShoppingCart } from 'phosphor-react'
import { ShoppingCardContainer } from './style'

interface ShoppingCardProps {
  kind: string
  quantity?: number
  productId?: number
  quantityValue?: number
  handleAddProduct?: () => void
}

export function ShoppingCard({ kind, handleAddProduct }: ShoppingCardProps) {
  return (
    <ShoppingCardContainer data-state={kind} onClick={handleAddProduct}>
      <ShoppingCart size={24} weight="fill" />
    </ShoppingCardContainer>
  )
}
