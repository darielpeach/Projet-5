import '../style/style.scss'

function Logementsitems({ id, cover, title}) {
    return (
        <li key={id} >
            <a href='#' className='kasa-logement-item'>
                <img className='kasa-logement-item-cover' src={cover} alt={`${title} cover`} />
                {title}
            </a>
        </li>
    )
}

export default Logementsitems