import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/style.scss'
import '../components/Dropdown.jsx'
import Dropdown from '../components/Dropdown.jsx';
import Rating from '../components/rating.jsx'
import Carrousel from '../components/Carrousel.jsx'

const PageLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((log) => log.id === id);
        if (!foundLogement) {
          navigate('*');
        } else {
          setLogement(foundLogement);
        }
      });
  }, [id, navigate]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Carrousel images={logement.pictures} />
      <div className='logement-host'>
        <div>
            <h1 className='titre-page-logement'>{logement.title}</h1>
            <p>{logement.location}</p>
          <div className='tags-container'>
            {logement.tags.map((tag, index) => (
              <span key={index} className="tags-logements">{tag}</span>
            ))}
          </div>
        </div>
        
        <div className='host-container'>
          <p className='host-name'>{logement.host.name}</p>
          <img src={logement.host.picture}  alt={`${logement.host.name}`} className='host-img'/>
          <Rating rating={logement.rating} />
        </div>
      </div>
      
      <div className='dropdown-list'>
        <Dropdown title="Description" content={logement.description} />
        <Dropdown title="Équipements" content={logement.equipments} />
      </div>
      <Footer />
    </div>

  );
};

export default PageLogement