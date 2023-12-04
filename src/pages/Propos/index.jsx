import Header from "../../components/Header";
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';
import styled from 'styled-components';

export default function Propos() {

	const proposDatas = [
		{
			"id": "1",
			"title": "Fiabilité",
			"content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			"id": "2",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]

	return (
		<>
			<Header />
			<ProposContainer>
			<Banner />
				{proposDatas.map(data => {
					return (
						<ProposCollapse key={data.id}>
							<Collapse style={{margin:'30px 0'}}  title={data.title} content={data.content} />
						</ProposCollapse>
					)}
/*la méthode map() prend comme argument l'élément (data) actuel, l'index de l'élément,
ainsi que le tableau d'objet entier sur lequel elle opère = proposDatas.
proposDatas sont extraits, on ajoute une key avec l'id unique pour ne pas avoir d'error*/
				)}
			</ProposContainer>
			<Footer />
		</>
	)
}

const ProposContainer = styled.main`
    font-family: 'Montserrat';
    max-width: 1440px;
    padding-top: 40px;
    margin: 0 auto;
	@media screen and (max-width: 500px) {
	    padding-top: 20px;
	}
`

const ProposCollapse = styled.div`
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