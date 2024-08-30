import { Product } from './product'
import { InfoButton, InfoCard, InfoContainer, InfoTable } from './style'

export function Card() {
  return (
    <InfoContainer>
      <h2>Café Selecionados</h2>
      <InfoCard>
        <div>
          <Product />
          <Product />
        </div>

        <InfoTable>
          <table>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>R$29,70</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>R$3,50</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <h2>Total</h2>
                </td>
                <td>
                  <h2>R$33,20</h2>
                </td>
              </tr>
            </tfoot>
          </table>
        </InfoTable>
        <InfoButton>CONFIRMAR PEDIDO</InfoButton>
      </InfoCard>
    </InfoContainer>
  )
}
