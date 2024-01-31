import Header from "../../components/Header";
// Importe Header depuis ...chemin
import Banner from "../../components/Banner";
// Importe Banner depuis ...chemin
import Location from "../../components/Location";
// Importe Location depuis ...chemin
import Footer from "../../components/Footer";
// Importe Footer depuis ...chemin
import styled from "styled-components";
// Importe Styled de React pour la style.css

function Home() {
  return (
    <>
    <Header />
    <HomeContainer>
      <Banner />
      <Location />
    </HomeContainer>
    <Footer />
    </>
  );
}

//On ajoute la têtière, la bannière, tous les hébergements à louer, et le pied de page

export default Home;

const HomeContainer = styled.main`
    font-family: 'Montserrat';
    max-width: 1440px;
    padding-top: 40px;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
        padding-top: 20px;
        margin:10px;
    } 
`
