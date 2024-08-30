import { HeaderContainer } from './style'

import logoCooffe from '../../assets/logo-coofee.svg'
import { Locale } from './locale'
import { ShoppingCard } from './shopping-card'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCooffe} alt="" />
      <nav>
        <Locale />
        <ShoppingCard />
      </nav>
    </HeaderContainer>
  )
}
