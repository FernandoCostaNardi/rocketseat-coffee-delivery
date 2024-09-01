import styled from 'styled-components'
import { typography } from '../../../styles/themes/font'

export const ItemsContainer = styled.div``

export const ItemsTitle = styled.span`
  ${typography.fonts.titleL}
  color: ${(props) => props.theme['base-subtitle']};
`

export const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  margin-top: 3.375rem;

  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
