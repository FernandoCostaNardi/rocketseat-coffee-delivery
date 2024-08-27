import { OrderInfo } from './order-info'
import { SuccessContainer } from './style'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <OrderInfo />
    </SuccessContainer>
  )
}
