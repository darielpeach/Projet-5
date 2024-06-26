import '../style/style.scss'
import Logementsitems from './LogementsItems'
import React, { useEffect, useState } from 'react';

const LogementList = () => {
  const [logements, setLogements] = useState([]);
  

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => {
        
        return response.json();
      })
      .then((data) => {
        setLogements(data);
      })

  }, []);

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
  );
};

export default LogementList;