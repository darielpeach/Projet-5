import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/style.scss'
import '../components/Dropdown.jsx'
import Dropdown from '../components/Dropdown.jsx';
import Rating from '../components/rating.jsx'

const PageLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const logementDetail = data.find((log) => log.id.toString() === id);
        setLogement(logementDetail);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
  );
  }

  return (
    <div>
      <Header />
      <div className='carousel'>
        <button onClick={handlePrev}>Précédent</button>
        <img src={logement.pictures[currentIndex]} className='carouselImg' alt={`${currentIndex + 1}`} />
        <button onClick={handleNext}>Suivant</button>
      </div>
      <div className='logementHost'>
        <div>
            <h1 className='titrePageLogement'>{logement.title}</h1>
            <p>{logement.location}</p>
          <div>
            {logement.tags.map((tag, index) => (
              <span key={index} className="tagsLogements">{tag}</span>
            ))}
          </div>
        </div>
        <p className='hostName'>{logement.host.name}</p>
        <div>
          <img src={logement.host.picture}  alt={`Photo de ${logement.host.name}`} className='hostImg'/>
          <Rating rating={logement.rating} />
        </div>
      </div>
      
      <div className='dropdownList'>
        <Dropdown title="Description" content={logement.description} />
        <Dropdown title="Équipements" content={logement.equipments} />
      </div>
      <Footer />
    </div>
  );
};


export default PageLogement