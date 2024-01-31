import logo from '../../assets/logo.png'
//On importe l'image logo depuis ...chemin de l'image pour le récupérer dans la src
import Navigation from '../Navigation'
//On importe le component Navigation depuis ... chemin du component
import styled from 'styled-components'
//On importe le styled-components pour la css React
 
function Header() {
    return (
        <HeaderContainer>
        <img src={logo} alt="Logo Kasa - Chez vous, partout et ailleur"/>
        <Navigation />
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between; 
    height: 68px;
    max-width: 95%;
    margin: 0 auto;
    @media screen and (max-width: 900px){
        height: 40px;
    }
    img {
        @media screen and (max-width: 900px){
            width:40%;
        }
    }
`