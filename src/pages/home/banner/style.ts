import { styled } from 'styled-components'
import { typography } from '../../../styles/themes/font'

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 3.175rem 3.175rem;

  grid-template-areas:
    'title title image image'
    'subtitle subtitle image image'
    'qualities qualities image image'
    'qualities qualities image image';

  margin-botton: 6.75rem;
`

export const Title = styled.span`
  grid-area: title;

  width: 36.75rem;

  ${typography.fonts.titleXL}
  color: ${(props) => props.theme['base-title']};
`

export const BannerImage = styled.div`
  display: flex;
  justify-content: right;
  align-items: top;
  grid-area: image;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const Subtitle = styled.span`
  grid-area: subtitle;

  margin-bottom: 4.125rem;

  ${typography.fonts.textL}
  color: ${(props) => props.theme['base-subtitle']};
`

export const Qualities = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 18.4rem;
  height: 2.625rem;

  margin-bottom: 1.25rem;
`
export const BaseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.75rem;

  color: ${(props) => props.theme.background};
`

export const IconShoppingCart = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const IconPackage = styled(BaseIcon)`
  background: ${(props) => props.theme['base-text']};
`

export const IconClock = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow};
`

export const IconCoffee = styled(BaseIcon)`
  background: ${(props) => props.theme.purple};
`
