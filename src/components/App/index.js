import React from 'react';
import './app.scss';

// Composants
import Zip from '../Zip';



function App() {
  return (
    <div className='app'>
      <h1> Entrer un code postal</h1>
      <Zip />
    </div>
  );
}

export default App;
