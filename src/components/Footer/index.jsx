import logo_footer from '../../assets/logo_footer.png'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer>
            <FooterTxt><img src={logo_footer} alt="Logo Kasa"/></FooterTxt>
            <FooterTxt>© 2020 Kasa. All rights reserved</FooterTxt>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer` 
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 50px;
    width: 100%;
    height: 209px;
    background-color: ${colors.quinary};
    padding: 50px;
    `
const FooterTxt = styled.p`
color: ${colors.primary};
font-size: clamp(12px, 2.5vw, 24px);
`