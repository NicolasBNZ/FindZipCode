import React, { useState } from 'react';
// import axios from 'axios';

// Composants import
import Zip from '../Zip';
import City from '../City';

//import data base départements
// import departements from 'D://CODE/Code postal/findzipcode/findzipcode/src/data/departements.json'

// links:
// https://static.data.gouv.fr/resources/departements-et-leurs-regions/20190815-175403/departements-region.json
// https://www.data.gouv.fr/fr/datasets/r/7b4bc207-4e66-49d2-b1a5-26653e369b66

import './app.scss';


function App() {

  // enter a zip code number
  const [search, setSearch] = useState('');
  console.log(search);

  // city to display
  // const [repos, setRepos] = useState([])
  // console.log('il y a quoi dans repos', repos);


  // // fonction to get city name
  // const makeSearch = () => {
  //   axios.get('D://CODE/Code postal/findzipcode/findzipcode/src/data/departements.json')
  //     .then((response) => {
  //       setRepos(response.data.items);
  //       console.log('il y a quoi dans response', response);
  //       // console.log('il y a quoi dans departements', departements);
  //       console.log('il y a quoi dans response.data.items', response.data.items);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       console.log('c est le finally');
  //     });
      
  // };



  return (
    <div className='app'>
      <h1> Trouver une commune avec son code postal</h1>
      <Zip search={search} setSearch={setSearch}/>
      <City />
    </div>
  );
}

export default App;
