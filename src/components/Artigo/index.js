import React, {useContext} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Button from '@material-ui/core/Button'

import Paragrafo from '../Paragrafo'
import Citacao from '../Citacao'
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
      <span>Art. {index}º </span>
      {artigo.citacao ?
        formatCitacao(onClick, artigo.caput, artigo.citacao)
      : <span>{artigo.caput}</span>}
      {artigo.inciso?
        <div>
          {Object.keys(artigo.inciso).map((numero, index)=>
            artigo.inciso[numero].citacao?
            <div key={index}>
              <div>{romanize(index + 1)} - {formatCitacao(onClick, artigo.inciso[numero].caput, artigo.inciso[numero].citacao, 0)}</div>
            </div>
            :
            <div  key={index}>
              <div>{romanize(index + 1)} - {artigo.inciso[numero].caput}</div>
            </div>
          )}
        </div>
        :null
      }
      <br/>
        {artigo.paragrafos?
          <div>
          {Object.keys(artigo.paragrafos).length === 1?
            <Paragrafo paragrafo={artigo.paragrafos[1]} unico/>

          :Object.keys(artigo.paragrafos).map((paragrafo, i) =>
            <Paragrafo paragrafo={artigo.paragrafos[paragrafo]} index={paragrafo}/>
          )}
          </div>
        :null}
    </div>
  )
}

export default Artigo
