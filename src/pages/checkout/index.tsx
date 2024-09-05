import { useContext } from 'react'
import { CartContext } from './../../context/CartContextProvider'
import { Address } from './address'
import { Card } from './card'
import { Payment } from './payment'
import { CheckoutContainer } from './style'

export function Checkout() {
  const { items } = useContext(CartContext)
  return (
    <CheckoutContainer>
      <Address />
      <Card items={items} />
      <Payment />
    </CheckoutContainer>
  )
}
