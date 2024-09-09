import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Illustration from '../../../assets/illustration.svg'
import {
  OrderInfoContainer,
  OrderInfoDetails,
  OrderInfoIconLocale,
  OrderInfoIconMoney,
  OrderInfoIconTime,
  OrderInfoIllustation,
} from './style'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContextProvider'

export function OrderInfo() {
  const { cartStateData } = useContext(CartContext)
  const { address, paymentMethod } = cartStateData
  return (
    <OrderInfoContainer>
      <OrderInfoDetails>
        <article>
          <OrderInfoIconLocale>
            <MapPin size={16} weight="fill" />
          </OrderInfoIconLocale>
          <div>
            <p>
              Entrega em{' '}
              <strong>
                {address?.street}, {address?.number}
              </strong>
            </p>
            <span>
              {address?.neighborhood} - {address?.city}, {address?.state}
            </span>
          </div>
        </article>

        <article>
          <OrderInfoIconTime>
            <Timer size={16} weight="fill" />
          </OrderInfoIconTime>
          <div>
            <p>Previsão de entrega</p>
            <span>
              <strong>20 min - 30 min</strong>
            </span>
          </div>
        </article>

        <article>
          <OrderInfoIconMoney>
            <CurrencyDollar size={16} />
          </OrderInfoIconMoney>
          <div>
            <p>Pagamentos na entrega</p>
            <span>
              <strong>{paymentMethod}</strong>
            </span>
          </div>
        </article>
      </OrderInfoDetails>
      <OrderInfoIllustation>
        <img src={Illustration} alt="" />
      </OrderInfoIllustation>
    </OrderInfoContainer>
  )
}
