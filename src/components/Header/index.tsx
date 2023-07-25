import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import {Timer, Scroll} from 'phosphor-react'
import Logo from '../../assets/Logo.svg'


export function Header() { 
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo" />
            <nav>
                <NavLink to='/' ><Timer size={24}/></NavLink>
                <NavLink to='/history'><Scroll size={24}/></NavLink>
            </nav>
        </HeaderContainer>
    )
}