import React from 'react';
import './App.css';

import reducer from './reducer'
import regimento from './regimento'
import GroupRenderer from './components/GroupRenderer'
import { AppContext } from './AppContext.js'

function App() {
  const { state } = React.useContext(AppContext);
  return (
    <div className="App">
      <h1>
        Regimento Interno Senado Federal
      </h1>
      <div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <div>
            {regimento.group.map((group, index)=>
              <GroupRenderer groupName={regimento.groupName} unit={group} index={index} key={index} openState={false} />
            )}
          </div>
          <iframe title={'Consituição Federal 1988'} width={'100%'} height={'100%'} src={state.citacaoLink}>Citacao</iframe>
        </div>
      </div>
    </div>
  );
}
export default App;
