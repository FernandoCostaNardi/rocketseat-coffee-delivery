import { Product } from './product'
import productData from '../../../../products.json'
import { InfoButton, InfoCard, InfoContainer, InfoTable } from './style'
import { Item } from '../../../interfaces/Item'
import { Product as ProductInterface } from '../../../interfaces/Product'

interface CartProps {
  items: Item[]
}

export function Card({ items }: CartProps) {
  const listProducts: ProductInterface[] = productData
  const coffeesInCart = items.map((item) => {
    const coffeeInfo = listProducts.find(
      (product) => product.id === item.productId
    )

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  return (
    <InfoContainer>
      <h2>Café Selecionados</h2>
      <InfoCard>
        <div>
          {coffeesInCart.map((product) => (
            <Product
              key={product.id}
              product={product}
              quantity={product.quantity}
            />
          ))}
        </div>

        <InfoTable>
          <table>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>
                  R$<span>9,00</span>
                </td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>
                  R$<span>5,00</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <h2>Total</h2>
                </td>
                <td>
                  <h2>
                    R$<span>19,00</span>
                  </h2>
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
