import styled from 'styled-components'

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
