import styled from 'styled-components'
import { typography } from '../../../styles/themes/font'

export const InputNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4.5rem;
  &[data-state='32'] {
    height: 2rem;
  }
  &[data-state='38'] {
    height: 2.375rem;
  }
  padding: 0.5rem 0.344rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-button']};
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  border: none;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const Quantity = styled.span`
  ${typography.fonts.textM}
  color: ${(props) => props.theme['base-title']};
`
