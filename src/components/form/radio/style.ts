import styled from 'styled-components'
import { typography } from '../../../styles/themes/font'

export const RadioButtonContainer = styled.label`
  width: 11rem;
  height: 3.19rem;
  padding: 1rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  input {
    display: none;
  }

  svg {
    margin-right: 0.75rem;
    color: ${(props) => props.theme.purple};
  }

  label {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    color: ${(props) => props.theme['base-text']};
    ${typography.fonts.buttonM}
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    border: 0.0625rem solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`
