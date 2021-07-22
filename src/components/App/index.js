import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Dimmer, Loader } from 'semantic-ui-react';


// CSS for semantic-ui-react composants
import 'semantic-ui-css/semantic.min.css';

// Composants import
import Zip from '../Zip';
import City from '../City';

import '../App/app.scss';


function App() {

  // enter a zip code number
  const [search, setSearch] = useState('');
  console.log('search', search);

  // city display
  const [repos, setRepos] = useState([])
  console.log('repos dans hook state', repos);



  // Call to the zip code API
  const makeSearch = () => {

    axios.get(`https://geo.api.gouv.fr/communes?codePostal=${search}`)
      .then((response) => {
        setRepos([
          ...repos,
          // utilisation de spread operator pour "aplatir" le tableau (récupérer les
          // éléments), sinon on intègrerait un tableau dans le tableau
          ...response.data
        ]);
        console.log('response', response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('c est un finally');;
      });
  };


  console.log('repos dans App en bas', repos);

  useEffect(() => {
    console.log('useEffect de App');
  }, []);


  return (
    <div className='app'>
      <h1 className="appTitle"> Trouve une commune avec son code postal</h1>
      <Zip search={search} setSearch={setSearch} makeSearch={makeSearch} />
      <City repos={repos} />
    </div>
  );
}
 
export default App;
