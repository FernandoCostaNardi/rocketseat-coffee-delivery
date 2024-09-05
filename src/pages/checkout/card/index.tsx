import { Product } from './product'
import productData from '../../../../products.json'
import { InfoButton, InfoCard, InfoContainer, InfoTable } from './style'
import { Item } from '../../../interfaces/Item'
import { Product as ProductInterface } from '../../../interfaces/Product'

interface CartProps {
  items: Item[]
}

const DELIVERY_TAX = 5
const listProducts: ProductInterface[] = productData

export function Card({ items }: CartProps) {
  const itemsInCart = items.map((item) => {
    const itemInfo = listProducts.find(
      (product) => product.id === item.productId
    )

    if (!itemInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...itemInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsValue = itemsInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  return (
    <InfoContainer>
      <h2>Café Selecionados</h2>
      <InfoCard>
        <div>
          {itemsInCart.map((product) => (
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
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsValue)}
                </td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(DELIVERY_TAX)}
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
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    }).format(totalItemsValue + DELIVERY_TAX)}
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
