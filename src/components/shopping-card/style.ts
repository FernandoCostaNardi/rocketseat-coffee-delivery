import styled from 'styled-components'

export const ShoppingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;
  margin-left: 0.75rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['yellow-light']};

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
