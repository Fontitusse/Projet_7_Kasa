import arrow from '../../assets/arrow.png';
import { useState } from 'react';
import styled from 'styled-components';

export default function Collapse({title, content}) {
    //Dans Accommodation title=description content=data.description
    //Dans Propos title=proposDatas.title content=proposDatas.content

    const [toggle, setToggle] = useState(false);
/*déclare la variable toggle d'état local et 
	setToggle est une fonction pour modifier son état : 
    j'ai utilisé les conditions dans le className 
    et les transitions dans la css
    transform-rotate et visibility pour le content*/
    return (
        <>
            <CollapseContainer>
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </CollapseContainer>
        </>
    )
}

/*la méthode map() prend comme argument l'élément (item) actuel, l'index de l'élément,
ainsi que le tableau d'objet entier sur lequel elle opère avec le contenu.
On ajoute une key pour ne pas avoir d'error*/

const CollapseContainer = styled.section`
    background-color: #F7F7F7;
    max-width: 1100px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin: 0 auto;
    .collapse_title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #FF6060;
        color: #fff;
        border-radius: 10px;
        font-weight: 500;
        font-size: clamp(13px, 2vw, 18px);
        padding: 10px 15px;
        cursor: pointer;
        .arrow {
            transition: all 0.2s ease-in-out;
            @media screen and (max-width: 1230px){
                width: 12px;     
            }
        }
        .arrow_up {
            transform: rotate(0deg);
        }
        .arrow_down {
            transform: rotate(180deg);
        }
    }
    .collapse_content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        letter-spacing: 1px;
        visibility: visible;
        opacity: 1;
        height: auto;
        padding: 10px;
        letter-spacing: 1px;
        font-size: clamp(12px, 2vw, 16px);
        color: #FF6060;
        transition: visibility 0.5s ease-in-out,
                    opacity 0.5s ease-in-out,
                    height 0.2s ease-in-out;
    }
    .collapse_content_hidden {
        visibility: hidden;
        opacity: 0;
        height: 0;
    }
}
`