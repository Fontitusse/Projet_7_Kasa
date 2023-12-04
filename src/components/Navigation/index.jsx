import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

function Navigation() {
    return  (
        <NavHeader>
            <LiNavLink to="/">Accueil</LiNavLink>
            <LiNavLink to="/propos">A propos</LiNavLink>
        </NavHeader>
    )     
}

export default Navigation

/*Pour déterminer quelle route on va suivre, on utilise la prop to
et on passe le nom de chemin voulu.*/

const NavHeader = styled.nav`
    display:flex;
    flex-direction:row;
    list-style:none;
    gap: 50px;
    font-size: clamp(12px, 2.5vw, 24px);
    @media screen and (max-width: 700px){
        gap: 10px;
    }
`

const LiNavLink = styled(NavLink)`
    color: ${colors.secondary};
    text-decoration:none;
    &:hover {
        cursor:pointer;
        position: relative;
        color: ${colors.secondary};
        transition: all 0.2s ease-in-out;
        text-decoration: underline solid ${colors.secondary}; 
    }
    @media screen and (max-width: 700px){
        text-transform: uppercase;
    }
`
