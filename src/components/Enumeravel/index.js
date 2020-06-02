import React from 'react'

import Button from '@material-ui/core/Button'

import { AppContext } from '../../AppContext'
import romanize from '../../romanize'

const format = (onClick, texto, citacao, index = 0) => {
  const substringA = texto.substring(0, texto.indexOf(citacao[index].texto))
  const substringB = texto.substring(texto.indexOf(citacao[index].texto) + citacao[index].texto.length)
  const citacoes = citacao.slice(1)

  return(
    <span>
      {substringA}
      {citacao[index].link ?
        <Button onClick={onClick('link', citacao[index].link)} key={index}>{citacao[index].texto}</Button>
        :<Button onClick={onClick('ref', citacao[index].ref)} key={index}>{citacao[index].texto}</Button>
      }
      {index < citacao.length - 1 ? format(onClick, substringB, citacao, index + 1) : substringB}
    </span>
    )
}

const Enumeravel = ({lista, tipo}) => {
    const { state, dispatch }  = React.useContext(AppContext)
    const onClick = (type, link) => () => type === 'link' ?
                                            dispatch({type: 'CHANGE_CITATION', citacaoLink: link})
                                            :dispatch({type: 'REFERENCE_CITATION', reference: link})

  const prefixo = tipo === 'artigo'?
                    (index) => `Art. ${parseInt(index)}${index < 10 ? 'º' : '.'} `
                  :tipo === "paragrafo" ?
                      Object.keys(lista).length === 1?
                        (index) => 'Parágrafo único. '
                        :(index) =>  `§ ${index}º `
                  :tipo === 'inciso' ?
                    (index) => `${romanize(parseInt(index))} - `
                  :tipo === 'letra' ?
                    (index) => `${String.fromCharCode('a'.charCodeAt(0) + (parseInt(index)-1) )}) `
                  :tipo === 'numerico' ?
                    (index) => `${index} - `
                  :()=>{}
  return(
    <div>
      {lista && Object.keys(lista).map( (key, index) =>
        <div id={ tipo === 'artigo' ? 'art.' + key : null }key={index}>
          {lista[key].citacao ?
            <span>{prefixo(key) } {format(onClick, lista[key].caput, lista[key].citacao)}</span>
            : <span>{prefixo(key) + lista[key].caput}</span>
          }
          {lista[key].enumeravel ?
            lista[key].enumeravel.map((enumeravel, index)=>
              <Enumeravel
                lista={enumeravel.lista}
                tipo={enumeravel.tipo}
                key={index}
              />
            )
            :null
          }
        </div>
      )}
    </div>
  )
}

export default Enumeravel
