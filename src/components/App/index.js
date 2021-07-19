import React from 'react';
import './app.scss';

// Composants
import Zip from '../Zip';
import City from '../City';



function App() {
  return (
    <div className='app'>
      <h1> Trouver une commune avec son code postal</h1>
      <Zip />
      <City />
    </div>
  );
}

export default App;
