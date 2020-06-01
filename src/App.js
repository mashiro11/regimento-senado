import React from 'react';
import './App.css';

import reducer from './reducer'
import regimento from './regimento'
import GroupRenderer from './components/GroupRenderer'

export const AppContext = React.createContext(null)

function App() {
  const [state, dispatch] = React.useReducer(reducer, {citacaoLink: '', reference: ''})
  return (
    <div className="App">
      <AppContext.Provider value={dispatch}>
        <h1>
          Regimento Interno Senado Federal
        </h1>
        <div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            <div>
              {Object.keys(regimento.group).map((groupKey, index)=>
                <GroupRenderer groupName={regimento.groupName} unit={{[groupKey]:regimento.group[groupKey]}} index={index} key={index} />
              )}
            </div>
            <iframe title={'Consituição Federal 1988'} width={'100%'} height={'100%'} src={state.citacaoLink}>Citacao</iframe>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}
export default App;
