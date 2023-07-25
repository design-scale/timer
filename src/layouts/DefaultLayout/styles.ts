import styled, {css} from 'styled-components'

// 74rem é igual a 1184px

export const LayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;

    padding: 2.5rem;

    ${({theme}) => css`
    
    background: ${theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    `}
`