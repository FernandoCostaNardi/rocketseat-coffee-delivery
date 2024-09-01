import styled from 'styled-components'

export const ShoppingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.375rem;

  &[data-state='yellow'] {
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }

  &[data-state='purple'] {
    color: ${(props) => props.theme['base-card']};
    background-color: ${(props) => props.theme['purple-dark']};

    &:hover {
      background-color: ${(props) => props.theme['purple']};
    }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
