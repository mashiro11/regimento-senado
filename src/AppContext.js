import React from 'react'
import reducer from './reducer.js'

const initialState = {citacaoLink: '', reference: ''}
const AppContext = React.createContext(initialState)

const AppContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return(
    <AppContext.Provider value={{state, dispatch}}>
    {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
