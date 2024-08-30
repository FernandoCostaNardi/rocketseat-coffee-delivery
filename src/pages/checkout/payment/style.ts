import { styled } from 'styled-components'
import { typography } from '../../../styles/themes/font'

export const PaymentContainer = styled.div`
  grid-area: 'payment';

  width: 40rem;
  height: 12.95rem;
  padding: 2.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['base-card']};
`

export const PaymentLabel = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin-right: 0.5rem;
    align-self: top;
    color: ${(props) => props.theme.purple};
  }

  span {
    ${typography.fonts.textM}
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    ${typography.fonts.textS}
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 11rem);
  grid-template-rows: repeat(1, 3.19rem);
  grid-template-areas: 'credit debit money';
  grid-column-gap: 1rem;

  margin-top: 2rem;
`
