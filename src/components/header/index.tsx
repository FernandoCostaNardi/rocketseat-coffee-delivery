import { ButtonContainer, Counter, HeaderContainer } from './style'

import logoCooffe from '../../assets/logo-coofee.svg'
import { Locale } from './locale'
import { ShoppingCard } from './shopping-card'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'

export function Header() {
  const { cartStateData } = useContext(CartContext)

  const cartQuantity = cartStateData.items ? cartStateData.items.length : 0

  return (
    <HeaderContainer>
      <img src={logoCooffe} alt="" />
      <nav>
        <Locale />
        <NavLink to="/checkout" title="Checkout">
          <ButtonContainer>
            <ShoppingCard kind="yellow" />
            <Counter>{cartQuantity}</Counter>
          </ButtonContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
