import { InputHTMLAttributes } from 'react'
import { RadioButtonContainer } from './style'

type RadioPaymentProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  value: string
  children?: React.ReactNode
  isSelected: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioPayment: React.FC<RadioPaymentProps> = ({
  name,
  value,
  children,
  isSelected,
  onChange,
  ...rest
}) => {
  return (
    <RadioButtonContainer data-state={isSelected}>
      <input
        type="radio"
        id={name}
        name={name}
        value={value}
        checked={isSelected}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={name}>
        {children} {value}
      </label>
    </RadioButtonContainer>
  )
}
