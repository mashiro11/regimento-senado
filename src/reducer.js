//import React from 'react'

const reducer = (state={}, action) => {
  switch(action.type){
    case 'CHANGE_CITATION':
      return {...state, citacaoLink: action.citacaoLink}
    case 'REFERENCE_CITATION':
      return {...state, reference: action.reference}
    default:
      return state
  }
}

export default reducer
