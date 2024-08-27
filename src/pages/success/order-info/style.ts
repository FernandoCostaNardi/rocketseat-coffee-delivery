import styled from 'styled-components'

export const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;

  padding-top: 2.5rem;
`

export const OrderInfoDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  width: 32.875rem;
  height: 16.875rem;
  margin: 0;
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  background: ${(props) =>
    props.theme['background-color']}; /* Ajuste conforme necessário */
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    padding: 1px; /* Ajuste conforme necessário */
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: -1;
  }

  article {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    padding-bottom: 2rem;
  }

  p,
  span {
    font-size: 1rem;
    padding-left: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const OrderInfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${(props) => props.theme.background};
`

export const OrderInfoIconLocale = styled(OrderInfoIcon)`
  background: ${(props) => props.theme.purple};
`

export const OrderInfoIconTime = styled(OrderInfoIcon)`
  background: ${(props) => props.theme.yellow};
`

export const OrderInfoIconMoney = styled(OrderInfoIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const OrderInfoIllustation = styled.div`
  width: 30.75rem;
  height: 18.31rem;
`
