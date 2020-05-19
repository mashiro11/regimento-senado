//import React from 'react'

const reducer = (state={}, action) => {
  switch(action.type){
    case 'CHANGE_CITATION':
      return {...state, citacaoLink: action.citacaoLink}
    default:
      return state
  }
}

export default reducer
