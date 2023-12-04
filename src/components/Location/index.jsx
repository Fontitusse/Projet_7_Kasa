import datas from '../../data/data'
import Card from '../Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

// Je affiche toutes les cartes, leur identifiant, titre et img cover.
export default function Location() {
    return (
        <LocationCard>
            {datas.map((data, index) => (
                <Card
                key={data.id}
                id={data.id}
                title={data.title}
                cover={data.cover}
                />
            ))}
        </LocationCard>
    )
}
/*la méthode map() prend comme argument l'élément (data) actuel, l'index de l'élément,
ainsi que le tableau d'objet entier sur lequel elle opère avec le contenu.
On ajoute une key pour ne pas avoir d'error*/
/* On importe le component Card dans lequel on construira la function 
d'une carte*/

const LocationCard = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;
    background-color: ${colors.tertiary};
    padding: 50px;
    border-radius: 25px;
    width: 95%;
    margin: 0 auto;
    @media screen and (max-width: 1230px){
        gap: 25px; 
        padding:25px 15px;       
    }
    @media screen and (max-width: 550px){  
        width: 100%;
    }
`
