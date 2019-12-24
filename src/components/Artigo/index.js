import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import Paragrafo from '../Paragrafo'
import Citacao from '../Citacao'
import romanize from '../../romanize'

const Artigo = ({artigo, index}) => {
  return(
    <div>
      <span>Art. {index}º </span>
      <span>{artigo.caput}</span>
      {artigo.inciso?
        <div>
          {Object.keys(artigo.inciso).map((enumeravel, index)=>
            <div>
              <div key={index}>{romanize(index + 1)} - {artigo.inciso[enumeravel].caput}</div>
            </div>
          )}
        </div>
        :null
      }
      <br/>
      {artigo.citacao?
        <Citacao citacao={artigo.citacao}/>
        :null
      }
      <br/>
      <div>
        {artigo.paragrafos?
          Object.keys(artigo.paragrafos).length === 1?
            <Paragrafo paragrafo={artigo.paragrafos[1]} unico/>
          :Object.keys(artigo.paragrafos).map((paragrafo, i) =>
            <Paragrafo paragrafo={artigo.paragrafos[paragrafo]} index={paragrafo}/>
          )
        :null}
      </div>
    </div>
  )
}

export default Artigo
