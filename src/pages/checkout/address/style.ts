import { styled } from 'styled-components'

import { typography } from '../../../styles/themes/font'

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
