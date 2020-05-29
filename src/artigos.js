import {artLink} from './constituicao.js'
import artigos from './artigos.json'

function getArtigos(){
	console.log('artigos:', artigos)
  return arguments.length === 2 ?
      Object.keys(artigos)
      .slice(arguments[0]-1, arguments[1])
      .reduce( (obj, numArtigo) => {return {...obj, [numArtigo] : artigos[numArtigo]} }, {})
      : {[arguments[0]]: artigos[arguments[0]]}
}

export { artigos, getArtigos }
