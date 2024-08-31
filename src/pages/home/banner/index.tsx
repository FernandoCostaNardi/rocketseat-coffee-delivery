import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeImage from '../../../assets/banner.svg'
import {
  BannerContainer,
  BannerImage,
  IconClock,
  IconCoffee,
  IconPackage,
  IconShoppingCart,
  Qualities,
  Subtitle,
  Title,
} from './style'

export function Banner() {
  return (
    <BannerContainer>
      <Title>Encontre o café perfeito para qualquer hora do dia</Title>
      <BannerImage>
        <img src={CoffeeImage} alt="" />
      </BannerImage>
      <Subtitle>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </Subtitle>
      <Qualities>
        <IconShoppingCart>
          <ShoppingCart size={16} weight="fill" />
        </IconShoppingCart>
        <span>Compra simples e segura</span>
      </Qualities>
      <Qualities>
        <IconPackage>
          <Package size={16} weight="fill" />
        </IconPackage>
        <span>Embalagem mantém o café intacto</span>
      </Qualities>
      <Qualities>
        <IconClock>
          <Timer size={16} weight="fill" />
        </IconClock>
        <span>Entrega rápida e rastreada</span>
      </Qualities>
      <Qualities>
        <IconCoffee>
          <Coffee size={16} weight="fill" />
        </IconCoffee>
        <span>O café chega fresquinho até você</span>
      </Qualities>
    </BannerContainer>
  )
}
