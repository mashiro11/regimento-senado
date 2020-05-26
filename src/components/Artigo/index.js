import React, {useContext} from 'react'
import Button from '@material-ui/core/Button'

import Paragrafo from '../Paragrafo'
import Enumeravel from '../Enumeravel'
import romanize from '../../romanize'

import { AppDispatch } from '../../App.js'

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

const Artigo = ({artigo, index}) => {
  const dispatch = useContext(AppDispatch)
  const onClick = (link) => () => dispatch({type: 'CHANGE_CITATION', citacaoLink: link})

  return(
    <div>
      <span><strong>Art. {index}º </strong></span>
      {artigo ?
        <>
        {artigo.citacao ?
          formatCitacao(null, artigo.caput, artigo.citacao)
          : <span>{artigo.caput}</span>
        }
        {artigo.enumeravel ?
          <Enumeravel
            lista={artigo.enumeravel.lista}
            tipo={artigo.enumeravel.tipo}
          />
          : null}
      </>
    : null}
    </div>
  )
}

export default Artigo
