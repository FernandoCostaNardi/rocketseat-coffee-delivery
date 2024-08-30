import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentContainer, PaymentLabel, PaymentSelector } from './style'
import { RadioPayment } from '../../../components/form/radio'
import { useState } from 'react'

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('credit')

  function handlePaymentMethodChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPaymentMethod(event.target.name)
  }

  return (
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
  )
}
