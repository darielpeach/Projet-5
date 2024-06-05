import '../style/style.scss'
import Logementsitems from './LogementsItems'
import { logements } from '../assets/data/logements'

function LogementList() {
    return (
        <div className='kasa-logement'> 
        <ul className='kasa-logement-list'>
            {logements.map(({ id, cover, title }) => (
                <Logementsitems
                    id={id}
                    cover={cover}
                    title={title}
                />
            ))}
        </ul>
        </div>
    )
}

export default LogementList