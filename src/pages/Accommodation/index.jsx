import { useEffect, useState } from "react"
// Importe les Hooks useEffect et useState depuis react
import { useParams } from "react-router-dom";
// Importe le Hooks useParams depuis react router dom
import datas from '../../data/data'
// Importe les datas depuis ...chemin datas
import Header from "../../components/Header";
// Importe le component Header depuis ...chemin
import Slider from "../../components/Carousel"
// Importe le component Carousel depuis ...chemin
import Footer from "../../components/Footer";
// Importe le component Footer depuis ...chemin
import Collapse from '../../components/Collapse';
// Importe le component Collapse depuis ...chemin
import greyStar from '../../assets/grey_star.png';
// Importe l'image greyStar depuis ...chemin de l'image pour le récupérer dans la src
import redStar from '../../assets/red_star.png';
// Importe l'image redStar depuis ...chemin de l'image pour le récupérer dans la src
import styled from "styled-components";
// Importe le styled depuis styled-components de react pour les styles css
import colors from "../../utils/style/colors";
// Importe les couleurs depuis ...chemin 


export default function Accommodation() {
/* Exporte par défaut (on peut l'importer avec n'importe quel nom),
 on exporte une valeur = la fonction Accommodation*/

	const [imageSlider, setImageSlider] = useState([]);
	/*déclare la variable imageSlider d'état local et 
	setImageSlider est une fonction pour modifier son état
	imageSlider est initialisé tableau vide, aucune valeur n'existe dans le storage*/

	const idAccommodation = useParams('id').id;
	//on récupère l'id de l'hébergement dans l'url courante grâce au Hook useParams

	const dataCurrentAccommodation = datas.filter(data => data.id === idAccommodation);
	/*La méthode filter() va créer un nouveau tableau contenant les datas de l'hébergement
	avec l'id récupéré


	/*On utilise ce Hook pour indiquer à React que notre composant
	 doit exécuter quelque chose après chaque affichage.
	 React enregistre la fonction passée en argument 
	 (que nous appellerons « effet »), et l’appellera plus tard,
	  après avoir mis à jour le DOM. */
	useEffect(() => {
		const dataCurrentAccommodation = datas.filter(data => data.id === idAccommodation);
		setImageSlider(dataCurrentAccommodation[0].pictures);
	}, [idAccommodation]);
	/*Dans l’exemple ci-dessus, nous passons [idAccommodation] comme second argument.
	Si la page est ré-affichée, React remettra le compteur de pictures à 0 = première image*/

	const name = dataCurrentAccommodation[0].host.name.split(' ');
	//Récupère le nom et prénom et supprime les espaces
	const rating = dataCurrentAccommodation[0].rating;
	//Récupère la notation stars
	const description  = dataCurrentAccommodation[0].description;
	//Récupère la description
	const equipments = dataCurrentAccommodation[0].equipments;
	//Récupère les équipements

	return (
		<>
			<Header/>
			<AccommodationContainer>
			<Slider imageSlider={imageSlider}/>
				<AccommodationContent>
					<AccommodationInfos>
						<h1>{dataCurrentAccommodation[0].title}</h1>
						<p>{dataCurrentAccommodation[0].location}</p>
						<AccommodationTags>
							{dataCurrentAccommodation[0].tags.map((tag, index) => {
								return (
									<AccommodationButton key={index}>{tag}</AccommodationButton>
								)
							})}
						</AccommodationTags>
					</AccommodationInfos>
					<AccommodationHost>
						<AccommodationHostFlex>
							<AccommodationHostName>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</AccommodationHostName>
							<AccommodationHostImg src={dataCurrentAccommodation[0].host.picture} alt="host of this accommodation" />
						</AccommodationHostFlex>
	
						<AccommodationHostStars>
							{[...Array(5)].map((star, index) => {
/*construit un tableau 5 stars.
La fonction de rappel function() est exécutée sur chaque élément du tableau, 
et la méthode map() prend comme argument l'élément (star) actuel, l'index de l'élément,
ainsi que le tableau d'objet entier sur lequel elle opère.
 */
								const ratingValue = index + 1;
								return (
									<AccommodationHostStarsImg key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</AccommodationHostStars>
					</AccommodationHost>
				</AccommodationContent>
				<AccommodationCollapse>
					<AccommodationCollapseItem>
						<Collapse title={'Description'} content={description} />	
					</AccommodationCollapseItem>
					<AccommodationCollapseItem>
						<Collapse title={'Équipements'} content={equipments}/>
					</AccommodationCollapseItem>	
				</AccommodationCollapse>
			</AccommodationContainer>
			<Footer/>
		</>
	)
}


const AccommodationContainer = styled.main`
font-family: 'Montserrat';
max-width: 1440px;
padding-top: 40px;
margin: 0 auto;
padding-bottom: 40px;
`
const AccommodationContent = styled.div`
	display:flex;
	justify-content: space-between;
	align-items: flex-start;
	color: ${colors.secondary};
	width: 95%;
	margin: 0 auto;
	@media screen and (max-width: 650px){
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;  
		gap: 10px;
	}
`
const AccommodationInfos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-weight: 500;
	font-size: 14px;
`
const AccommodationButton = styled.button`
	display: inline;
	padding: 5px 15px;
	margin-right: 10px;
	cursor: pointer;
	border-radius: 10px;
	border: none;
	color: ${colors.primary};
	background-color: ${colors.secondary};
	&:hover{
		box-shadow: 0 2px 8px rgb(0, 0, 0);
	}
`
const AccommodationTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;  
`
const AccommodationHost = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	@media screen and (max-width: 650px){
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items:center;     
	}
`
const AccommodationHostFlex = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	gap: 0 10px;
	@media screen and (max-width: 500px){
		gap: 0 5px;   
	}
`

const AccommodationHostName = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`

const AccommodationHostImg = styled.img`
	width: 64px;
	height: 64px;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
`

const AccommodationHostStars = styled.div`
	display: flex;
	gap: 10px;
`

const AccommodationHostStarsImg = styled.img`
	width: 30px;
	height: 30px;
	@media screen and (max-width: 650px){
		width: 20px;
		height: 20px;  
	}
`

const AccommodationCollapse = styled.div`{
    display: flex;
    justify-content: space-between;
    gap: 70px;
    margin: 30px auto;
    width: 95%;
    @media screen and (max-width: 650px){
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px auto;   
    }
`

const AccommodationCollapseItem = styled.div`
    width: 50%;
@media screen and (max-width: 650px){
    width: 100%;
    }
`   

