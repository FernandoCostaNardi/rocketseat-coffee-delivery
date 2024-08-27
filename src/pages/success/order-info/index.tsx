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

export function OrderInfo() {
  return (
    <OrderInfoContainer>
      <OrderInfoDetails>
        <article>
          <OrderInfoIconLocale>
            <MapPin size={16} weight="fill" />
          </OrderInfoIconLocale>
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
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
