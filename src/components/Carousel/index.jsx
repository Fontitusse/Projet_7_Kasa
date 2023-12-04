import ArrowRight from '../../assets/chevron_carousel_right.png'
// Importe image flêche droite depuis ...chemin
import ArrowLeft from '../../assets/chevron_carousel_left.png'
// Importe image flêche gauche depuis ...chemin
import { useState } from 'react'
// Importe le Hook useState depuis react
import styled from 'styled-components'
// Importe le composant style de react pour la style.css

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    /* La fonction useState retourne un tableau.
    Cette fonction prend comme paramètre la valeur initiale désirée.
    Le premier élément du tableau (currentIndex) est une variable
    donnant accès à la valeur d’état (ici 0). 
	Le deuxième élément (setCurrentIndex) est une fonction qui met 
    à jour l’état du composant afin d’avoir les nouvelles valeurs dans le DOM. */

    /* Formule pour aller à l'image suivante :
    On ajoute 1 à la valeur initiale, 
    si la valeur initiale = totalité d'image -1, alors SetCurrentIndex remis à 0
    exemple : pour l'img 6/6 (5), au click next on reviendra sur l'img 1/6 (0)
    (sachant que la valeur de currentIndex est initialisée à 0) */
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    /* Formule pour aller à l'image précédente :
    On soustrait 1 à la valeur initiale, 
    si la valeur initiale = 0, au clic sur précédent, le total d'imageSlider - 1
    exemple : je suis sur img 1/6 (0), au click previous on ira sur l'img 6/6 (5)
    (sachant que la valeur de currentIndex est initialisée à 0) */
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <CarouselContainer style={{backgroundImage : `url(${imageSlider[currentIndex]})`}}>
            {imageSlider.length > 1 && 
                <>
                    <CarouselArrowRight  
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <CarouselArrowLeft  
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    <CarouselSlideCount>{currentIndex + 1} / {imageSlider.length}</CarouselSlideCount>
                </>
            } 
        </CarouselContainer>
    )
}
// A condition qu'il y ai plus d'1 img, on affiche les flêches et les chiffres
// Pour afficher les chiffres on affiche l'img 0 + 1 / affiche le nombre total d'image

const CarouselContainer = styled.section`
    position: relative;
    display: flex;
    width: 100%;
    height: 415px;
    border-radius: 25px;
    background-position: center;
    background-size: cover;
    width: 95%;
    margin: 43px auto;
    @media screen and (max-width: 650px){
        height: 200px;     
    }
`

const CarouselArrowRight = styled.img`
    position: absolute;
    top: 50%;
    right:1%;
    height: 15%;
    transform: translateY(-50%);
    cursor: pointer;
    &:active{
        transform: translateY(-50%) scale(0.9);
        right: 25px;
}
`
const CarouselArrowLeft = styled.img`
    position: absolute;
    top: 50%;
    left:1%;
    height: 15%;
    transform: translateY(-50%);
    cursor: pointer;
    &:active{
        transform: translateY(-50%) scale(0.9);
        left: 25px;
}
`
const CarouselSlideCount = styled.p`
position: absolute;
bottom: 25px;
left: 50%;
transform: translateX(-50%);
color: $color-primary;
font-weight: 500;
font-size: clamp(14px, 2vw, 18px);
`
