import '../style/style.scss'
import { Link } from 'react-router-dom'


function Logementsitems({ id, cover, title}) {
    return (
        <li key={id}>
            <Link to={`/logement/${id}`} className='kasa-logement-item'>
                <article>
                    <img className='kasa-logement-item-cover' src={cover} alt={`${title} cover`} ></img>
                    <p className='kasa-logement-title'>{title }</p>
                </article>
            </Link>
        </li>
    )
}

export default Logementsitems