import React, { useState } from 'react';
import './app.scss';

// Composants import
import Zip from '../Zip';
import City from '../City';



function App() {

  // enter a zip code number
  const [search, setSearch] = useState('');
  console.log(search);
  
  return (
    <div className='app'>
      <h1> Trouver une commune avec son code postal</h1>
      <Zip search={search} setSearch={setSearch} />
      <City />
    </div>
  );
}

export default App;
