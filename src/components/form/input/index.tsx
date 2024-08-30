import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  useState,
} from 'react'
import { Box, InputContainer } from './style'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  placeholder?: string
  name?: string
  value?: string
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputText({
  type,
  placeholder,
  name,
  value,
  optional,
  containerProps,
  onFocus,
  onBlur,
  ...rest
}: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <InputContainer data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {optional ? <span>Opcional</span> : null}
      </InputContainer>
    </Box>
  )
}
