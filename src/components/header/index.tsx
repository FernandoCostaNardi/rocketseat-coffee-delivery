import { HeaderContainer } from './style'

import logoCooffe from '../../assets/logo-coofee.svg'
import { Locale } from './locale'
import { ShoppingCard } from './shopping-card'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCooffe} alt="" />
      <nav>
        <Locale />
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCard kind="yellow" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
