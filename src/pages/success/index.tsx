import { useContext } from 'react'
import { OrderInfo } from './order-info'
import { SuccessContainer } from './style'
import { CartContext } from '../../context/CartContextProvider'

export function Success() {
  const { cartStateData } = useContext(CartContext)

  console.log(cartStateData)
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <OrderInfo />
    </SuccessContainer>
  )
}
