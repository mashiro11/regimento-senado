import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo'

import reducer from './reducer'
import regimento from './regimento'

export const AppDispatch = React.createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, {citacaoLink: ''})

  return (
    <div className="App">
      <AppDispatch.Provider value={dispatch}>
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
            <iframe width={'100%'} height={'100%'} src={state.citacaoLink}>Citacao</iframe>
          </div>
        </div>
      </AppDispatch.Provider>
    </div>
  );
}
export default App;
