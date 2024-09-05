import { HomeContainer, HomeProductContainer } from './style'

import { Banner } from './banner'
import { Items } from './Itens'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <HomeProductContainer>
        <Items />
      </HomeProductContainer>
    </HomeContainer>
  )
}
