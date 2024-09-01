import styled from 'styled-components'
import { typography } from '../../../../styles/themes/font'

export const ItemContainer = styled.div`
  width: 100%;
  height: 19.375rem;

  border-radius: 0.375rem 2.25rem;

  background: ${(props) => props.theme['base-card']};
`
export const ImageItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.75rem;
`

export const Tag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.25rem;
  width: fit-content;
  height: 1.3125rem;
  padding: 0.25rem 0.5rem;

  border-radius: 6.25rem;
  border: none;

  ${typography.fonts.tag}
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  ${typography.fonts.titleS}
  color: ${(props) => props.theme['base-subtitle']};
`
export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1.25rem;

  ${typography.fonts.textS}
  color: ${(props) => props.theme['base-label']};

  p {
    text-align: center;
  }
`
export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.06rem 1.5rem 1.25rem 1.5rem;
`
export const Price = styled.div`
  display: flex;
  justify-content: left;
  align-items: baseline;

  margin-right: 1.4375rem;

  span {
    margin-right: 0.225rem;
    ${typography.fonts.textS}
    color: ${(props) => props.theme['base-text']};
  }

  p {
    ${typography.fonts.titleM}
    color: ${(props) => props.theme['base-text']};
  }
`
export const InputNumberContainer = styled.div`
  display: flex;
  justify-content: left !important;
  align-items: center;

  height: 2.375rem;
  margin-right: 0.5rem;
`
