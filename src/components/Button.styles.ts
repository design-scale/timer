// https://app.rocketseat.com.br/node/projeto-02/group/estrutura-da-aplicacao-4/lesson/configurando-temas
// https://www.udemy.com/course/react-avancado/learn/lecture/21871162#overview

import styled, {css} from 'styled-components'

    interface ButtonContainerProps {
        variant: 'primary' | 'secondary' | 'danger' | 'sucess';
    }


    // export const ButtonContainer = styled.button<ButtonContainerProps>`
    //     width: 100px;
    //     height: 40px;

    //     background-color: ${props => props.theme.primary}
    // `

    export const ButtonContainer = styled.button<ButtonContainerProps>`

    ${({theme}) => css`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;
    background-color: ${theme.primary};
    color: white;
    
    `}
`
