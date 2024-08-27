import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ShoppingCardContainer } from './style'

export function ShoppingCard() {
  return (
    <ShoppingCardContainer>
      <NavLink to="/history" title="Histórico">
        <ShoppingCart size={24} weight="fill" />
      </NavLink>
    </ShoppingCardContainer>
  )
}
