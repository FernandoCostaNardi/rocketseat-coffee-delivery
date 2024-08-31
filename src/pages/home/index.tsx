import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { HomeContainer, HomeProductContainer } from './style'
import { Banner } from './banner'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <HomeProductContainer>bom dia</HomeProductContainer>
    </HomeContainer>
  )
}
