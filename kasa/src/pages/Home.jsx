import Banner from '../components/Banner'
import Logement from '../components/LogementList'
import Footer from '../components/Footer'
import Header from '../components/Header';
import homeBanner from '../assets/Mask Group.jpg'

function Home() {
    return(
        <div>
            <Header />
            <Banner imageSrc={homeBanner} altText="Bannière paysage" text="Chez vous, partout et ailleurs"/>
            <Logement />
            <Footer />
        </div>
    ) 
}

export default Home