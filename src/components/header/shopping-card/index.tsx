import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ShoppingCardContainer } from './style'

export function ShoppingCard() {
  return (
    <ShoppingCardContainer>
      <NavLink to="/checkout" title="Checkout">
        <ShoppingCart size={24} weight="fill" />
      </NavLink>
    </ShoppingCardContainer>
  )
}
