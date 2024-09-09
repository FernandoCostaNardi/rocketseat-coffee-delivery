import styled from 'styled-components'
import { typography } from '../../styles/themes/font'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 10rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;
  }

  a {
    text-decoration: none;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -2.1rem;
  margin-left: -0.7rem;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  ${typography.fonts.textXS}
  font.weight: 700;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
`
