import { styled } from 'styled-components'
import { typography } from '../../../styles/themes/font'

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
