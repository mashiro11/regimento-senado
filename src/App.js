import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo'

import regimento from './regimento'

function App() {
  return (
    <div className="App">
      <h1>
        Regimento Interno Senado Federal
      </h1>
      <div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <div>
          {Object.keys(regimento).map((titulo, index)=>
            <Titulo nome={titulo} titulo={regimento[titulo]} index={index} key={index} />
          )}
          </div>
          <iframe width={'100%'} height={'100%'} src={localStorage.getItem('citacao')}>Citacao</iframe>
        </div>
      </div>
    </div>
  );
}

/*

*/
export default App;
