import React from 'react'

import Button from '@material-ui/core/Button'

import { AppDispatch } from '../../App.js'
import romanize from '../../romanize'

const formatCitacao = (onClick, texto, citacao, index) => {
  const substringA = texto.substring(0, texto.indexOf(citacao[0].texto))
  const substringB = texto.substring(texto.indexOf(citacao[0].texto) + citacao[0].texto.length)
  const citacoes = citacao.slice(1)
  return <span>
            {substringA}
            <Button onClick={onClick(citacao[0].link)} key={index}>{citacao[0].texto}</Button>
            {citacoes.length > 0 ? formatCitacao(substringB, citacoes, index + 1) : substringB}
          </span>
}

const Enumeravel = ({lista, tipo}) => {
    const dispatch = React.useContext(AppDispatch)
    const onClick = (link) => () => dispatch({type: 'CHANGE_CITATION', citacaoLink: link})

  const prefixo = tipo === 'paragrafo' ?
                      Object.keys(lista).length === 1?
                        (index) => 'Parágrafo único. '
                        :(index) =>  '§ ' + (index+1) + 'º '
                  :tipo === 'inciso' ?
                    (index) => romanize(index+1) + ' - '
                  :tipo === 'letra' ?
                    (index) => String.fromCharCode('a'.charCodeAt(0) + index) + ') '
                  :()=>{}

  return(
    <div>
      {lista && Object.keys(lista).map( (key, index) =>
        <div>
          {lista[key].citacao ?
            formatCitacao(onClick, lista[key].caput, lista[key].citacao, index)
            : <span>{prefixo(index) + lista[key].caput}</span>
          }
          {lista[key].enumeravel ?
            <Enumeravel
              lista={lista[key].enumeravel.lista}
              tipo={lista[key].enumeravel.tipo}
            />
            :null
          }
        </div>
      )}
    </div>
  )
}

export default Enumeravel
