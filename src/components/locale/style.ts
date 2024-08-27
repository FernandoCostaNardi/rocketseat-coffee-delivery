import style from 'styled-components'

export const LocaleContainer = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    width: 8.9375rem;
    height: 2.375rem;
    padding: 0.625rem 0.5rem;
    border-radius: 0.375rem;

    font-size: 0.875rem;
    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};

    p {
     margin-left: 0.25rem;
     line-height: 1.3;
     color: ${(props) => props.theme['purple-dark']};
    }
`
