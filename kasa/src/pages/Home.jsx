import Banner from '../components/Banner'
import Logement from '../components/LogementList'
import Footer from '../components/Footer'
import Header from '../components/Header';

function Home() {
    return(
        <div>
            <Header />
            <Banner />
            <Logement />
            <Footer />
        </div>
    ) 
}

export default Home