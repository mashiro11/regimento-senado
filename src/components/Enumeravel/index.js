import React from 'react'

import Button from '@material-ui/core/Button'

import { AppDispatch } from '../../App.js'
import romanize from '../../romanize'

const format = (onClick, texto, citacao, index = 0) => {
  console.log('texto:', texto, 'index:', index, 'citacao:', citacao)
  const substringA = texto.substring(0, texto.indexOf(citacao[index].texto))
  const substringB = texto.substring(texto.indexOf(citacao[index].texto) + citacao[index].texto.length)
  const citacoes = citacao.slice(1)

  return(
    <span>
      {substringA}
      <Button onClick={onClick(citacao[index].link)} key={index}>{citacao[index].texto}</Button>
      {index < citacao.length - 1 ? format(onClick, substringB, citacao, index + 1) : substringB}
    </span>
    )
}

const Enumeravel = ({lista, tipo}) => {
    const dispatch = React.useContext(AppDispatch)
    const onClick = (link) => () => dispatch({type: 'CHANGE_CITATION', citacaoLink: link})

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
        <div key={index}>
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
