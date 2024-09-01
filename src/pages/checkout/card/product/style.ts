import styled from 'styled-components'
import { typography } from '../../../../styles/themes/font'

export const ProductContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'image detais detais price'
    'image actions actions .';

  padding: 0.25rem 0.5rem;

  &:not(:first-child) {
    margin: 1.5rem 0;
  }

  &:first-child {
    margin-bottom: 1.5rem;
  }

  img {
    grid-area: image;
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const Title = styled.span`
  grid-area: detais;
  justify-self: left;
  ${typography.fonts.textM}
  font-weight: regular;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Price = styled.span`
  grid-area: price;
  justify-self: right;
  ${typography.fonts.textM}
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`
export const Actions = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  widht: 5.69rem;
  height: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-left: 0.5rem;

  ${typography.fonts.buttonM}
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    margin-right: 0.25rem;
    color: ${(props) => props.theme.purple};
  }
`

export const ProductSeparator = styled.hr`
  width: 23rem;
  border: none; /* Remove any default border */
  border-top: 1px solid ${(props) => props.theme['base-button']}; /* Define the color and thickness of the line */
`
