import { useContext, useState } from 'react'
import { CartContext } from './../../context/CartContextProvider'
import listProducts from '../../../products.json'

import {
  AddressCard,
  AddressContainer,
  AddressForm,
  AddressLabel,
  CheckoutContainer,
  InfoButton,
  InfoCard,
  InfoContainer,
  InfoTable,
  PaymentContainer,
  PaymentLabel,
  PaymentSelector,
} from './style'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { InputText } from '../../components/form/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Product } from './product'
import { RadioPayment } from '../../components/form/radio'
import { Address } from '../../interfaces/Address'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { cartStateData, checkOut, paymentMethodCheckOut } =
    useContext(CartContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>()
  const [paymentMethod, setPaymentMethod] = useState('credit')

  const DELIVERY_TAX = 5

  console.log(cartStateData)
  const itemsInCart = cartStateData.items.map((item) => {
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

  function handlePaymentMethodChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPaymentMethod(event.target.name)
    paymentMethodCheckOut(paymentMethod)
  }

  const onSubmit: SubmitHandler<Address> = (data) => {
    console.log(data)
    if (!data.zip) {
      alert('O cep é obrigatório')
      return
    }
    if (!data.street) {
      alert('O campo rua é obrigatório')
      return
    }
    if (!data.number) {
      alert('O campo número é obrigatório')
      return
    }
    if (!data.neighborhood) {
      alert('O campo bairro é obrigatório')
      return
    }
    if (!data.city) {
      alert('O campo cidade é obrigatório')
      return
    }
    if (!data.state) {
      alert('O campo estado é obrigatório')
      return
    }

    checkOut(data)

    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <AddressContainer>
        <h2>Complete seu pedido</h2>
        <AddressCard>
          <AddressLabel>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido </p>
            </div>
          </AddressLabel>
          <form id="order" onSubmit={handleSubmit(onSubmit)}>
            <AddressForm>
              <InputText
                placeholder="CEP"
                type="text"
                containerProps={{ style: { gridArea: 'cep' } }}
                {...register('zip')}
              />
              <InputText
                placeholder="Rua"
                type="text"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
              />
              <InputText
                placeholder="Número"
                type="text"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
              />
              <InputText
                placeholder="Complemento"
                type="text"
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                optional
                {...register('complement')}
              />
              <InputText
                placeholder="Bairro"
                type="text"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
              />
              <InputText
                placeholder="Cidade"
                type="text"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
              />
              <InputText
                placeholder="UF"
                type="text"
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
              />
            </AddressForm>
          </form>
        </AddressCard>
      </AddressContainer>
      <PaymentContainer>
        <PaymentLabel>
          <CurrencyDollar size={22} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </PaymentLabel>
        <PaymentSelector>
          <RadioPayment
            name="credit"
            value="CARTÃO DE CRÉDITO"
            isSelected={paymentMethod === 'credit'}
            onChange={handlePaymentMethodChange}
          >
            <CreditCard size={16} />
          </RadioPayment>
          <RadioPayment
            name="debit"
            value="CARTÃO DE DÉBITO"
            isSelected={paymentMethod === 'debit'}
            onChange={handlePaymentMethodChange}
          >
            <Bank size={16} />
          </RadioPayment>
          <RadioPayment
            name="money"
            value="DINHEIRO"
            isSelected={paymentMethod === 'money'}
            onChange={handlePaymentMethodChange}
          >
            <Money size={16} />
          </RadioPayment>
        </PaymentSelector>
      </PaymentContainer>
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
          <InfoButton type="submit" form="order">
            CONFIRMAR PEDIDO
          </InfoButton>
        </InfoCard>
      </InfoContainer>
    </CheckoutContainer>
  )
}
