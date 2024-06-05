import error from '../Error/404.png'
import Header from '../Header'
import Footer from '../Footer'

function Error() {
    return (
        <div>
            <Header />
            <img src={error} alt="error 404" />
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Footer />
        </div>
    )
}

export default Error