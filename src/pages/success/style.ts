import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: extra-bold;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    font-weight: regular;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
