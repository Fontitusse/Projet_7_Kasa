import Header from "../../components/Header";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import colors from "../../utils/style/colors";

export default function Error() {
  return (
    <>
    <Header />
    <ErrorPage>
        <div className="infos">
        <h1>404</h1>
        <div className="text">Oops! La page que vous demandez n'existe pas.</div>
        <p className="retour"><LinkError to="/">Retourner sur la page d'accueil</LinkError></p>
        </div>
    </ErrorPage>
    </>
  );
}

const ErrorPage = styled.div` 
    font-family: 'Montserrat';
    max-width: 1440px;
    padding-top: 40px;
    margin: 0 auto;
    padding-bottom: 40px;
    color: ${colors.secondary};
    .infos{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 250px);
        h1{
            font-weight: 700;
            font-size: clamp(96px, 18vw, 288px);
            margin-top:10%;
            margin-bottom:2%;
            @media screen and (max-width: 768px) {
                margin-top:30%;
                margin-bottom:4%;    
            }
        }
        .text{
            font-weight: 500;
            font-size: clamp(20px, 4vw, 36px);
            text-align: center;
            margin-bottom:13%;
            @media screen and (max-width: 768px) {
              margin:0 5% 35% 5%;    
          }
        }
        .retour{
            display: block;
            text-align: center;
            font-weight: 500;
            font-size: clamp(14px, 2.5vw, 18px);
        }
    }
}
`
const LinkError = styled(Link)`
    color: ${colors.secondary};
    text-decoration:none;
    &:hover {
        cursor:pointer;
        position: relative;
        color: ${colors.secondary};
        transition: all 0.2s ease-in-out;
        text-decoration: underline solid ${colors.secondary}; 
    }
    `