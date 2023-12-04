import styled from 'styled-components'
// Importe les styles components de react pour la style.css
import colors from '../../utils/style/colors'
// Importe les couleurs depuis ...chemin
import homeCover from '../../assets/home_cover.png'
// Importe l'image de la bannière home depuis ...chemin
import proposCover from '../../assets/propos_cover.png'
// Importe l'image de la bannière propos depuis ...chemin
import { useLocation } from 'react-router-dom';
// Importe le hook useLocation depuis react-router-dom.
import { useEffect, useState } from 'react';
// Importe les Hooks useEffect et useState depuis react

export default function Banner() {
	const [proposPage, setProposPage] = useState(false);
/*Le hook useState déclare la variable proposPage d'état local et 
	setProposPage est une fonction pour modifier son état, ici il est initialisé à false*/

	const location = useLocation();
/*Le hook useLocation renvoie l'objet de localisation qui représente l'URL actuelle.
Ici on enverra la bannière de homeCover lorsque l'utilisateur sera sur la page Home
et proposCover lorsque l'utilisateur sera sur la page Propos */

/*Le Hook useEffect indique à React que notre composant
doit exécuter quelque chose après chaque affichage.
React enregistre la fonction passée en argument 
(que nous appellerons « effet »), et l’appellera plus tard,
après avoir mis à jour le DOM. Si l'url est === /propos,
setProposPage est true, alors on retourne et affiche banner_propos, 
sinon affiche banner*/
	useEffect(() => {
		if(location.pathname === '/propos'){
			setProposPage(true)
		};
	}, [location])

	return (
        <BannerContainer>
		<div className={proposPage ? 'banner_propos' : 'banner'}>
			{!proposPage && <p>Chez vous, partout&#160;et&#160;ailleurs</p>}
		</div>
        </BannerContainer>
	)
}
// Condition dans le className =
// Sommes nous dans proposPage alors banner_propos, sinon banner
// && à condition que nous ne sommes pas sur la page propos

const BannerContainer = styled.section`
    .banner_propos {
        position: relative;
        display: flex;
        border-radius: 25px;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${proposCover}');
        background-position: center;
        background-size: cover;
        height: 223px;
        padding: 20px;
        max-width: 95%;
        margin: 43px auto;
        @media screen and (max-width: 550px){
            margin: 20px auto;
            height: 120px;
        }
    }
    .banner {
        position: relative;
        display: flex;
        border-radius: 25px;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${homeCover}');
        background-position: center;
        background-size: cover;
        height: 223px;
        padding: 20px;
        max-width: 95%;
        margin: 43px auto;
        @media screen and (max-width: 550px){
            margin: 20px auto;
            height: 120px;
        }
        p {
            color: ${colors.primary};
            font-size: clamp(20px, 4vw, 48px);
            text-align: center;
            font-weight: 500;
            position: relative;
            margin:60px;
            @media screen and (max-width: 550px){
                text-align: left;
                margin:15px 45px 15px 5px;
            }
        }
    }
`