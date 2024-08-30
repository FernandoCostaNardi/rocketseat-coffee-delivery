import { Address } from './address'
import { Card } from './card'
import { Payment } from './payment'
import { CheckoutContainer } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Address />
      <Card />
      <Payment />
    </CheckoutContainer>
  )
}
