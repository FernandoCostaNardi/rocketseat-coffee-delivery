import styled from 'styled-components'
import { typography } from '../../styles/themes/font'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'address card'
    'payment card';

  grid-column-gap: 2rem;
  grid-row-gap: 0.75rem;

  max-width: 90rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  padding: 0 10rem;

  section:nth-child(2) {
    outline: 1px solid red;
    grid-area: card;
  }

  section:nth-child(3) {
    width: 40rem;
    outline: 1px solid red;
    grid-area: payment;
  }
`

export const AddressContainer = styled.div`
  grid-area: 'address';

  width: 40rem;
  max-height: 26rem;

  h2 {
    ${typography.fonts.titleXS}
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressCard = styled.div`
  margin-top: 0.9375rem;
  padding: 2.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['base-card']};
`

export const AddressLabel = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    align-self: top;
    color: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.5rem;
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

export const AddressForm = styled.div`
  display: grid;

  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-template-rows: repeat(4, 1fr);

  grid-row-gap: 1rem;
  grid-column-gap: 0.75rem;

  margin-top: 2rem;
`

export const AddressFormCep = styled.div`
  grid-area: cep;
`

export const InfoContainer = styled.div`
  grid-area: card;

  width: 28rem;

  h2 {
    ${typography.fonts.titleXS}
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoCard = styled.div`
  margin-top: 0.9375rem;

  max-height: 31.125rem;
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;

  background: ${(props) => props.theme['base-card']};
`

export const InfoTable = styled.div`
  margin-top: 0.9375rem;

  table {
    width: 100%;
    ${typography.fonts.textS}
    color: ${(props) => props.theme['base-text']};
  }
  td:first-child {
    text-align: left;
    padding-bottom: 0.75rem;
  }
  td:last-child {
    text-align: right;
  }

  h2 {
    ${typography.fonts.textL}
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoButton = styled.button`
  width: 100%;
  height: 2.875rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  ${typography.fonts.buttonG}
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

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
