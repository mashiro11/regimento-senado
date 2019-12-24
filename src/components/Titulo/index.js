import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import Capitulo from '../Capitulo'
import romanize from '../../romanize'


const Titulo = ({nome, titulo, index}) => {
  return(
    <ExpansionPanel>
      <ExpansionPanelSummary>Título {romanize(index + 1)} - {nome}</ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {titulo.capitulos?
          <List>
            {Object.keys(titulo.capitulos).map((capitulo, num) =>
              <ListItem key={num}>
                <Capitulo
                  nome={capitulo}
                  capitulo={titulo.capitulos[capitulo]}
                  index={num} key={num}
                />
              </ListItem>
            )}
          </List>
        : <div></div>}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

/*

<ExpansionPanel>
  <ExpansionPanelSummary>Titulo I - Do Funcionamento</ExpansionPanelSummary>
  <ExpansionPanelDetails>
    <ExpansionPanel>
      <ExpansionPanelSummary>Capítulo I - Da Sede</ExpansionPanelSummary>
      <ExpansionPanelDetails>
        Art. 1º O Senado Federal tem sede no Palácio do Congresso Nacional, em Brasília.
        <br/>
        <br/>
        Parágrafo único. Em caso de guerra, de comoção intestina, de calamidade pública
        ou de ocorrência que impossibilite o seu funcionamento na sede, o Senado poderá
        reunir-se, eventualmente, em qualquer outro local, por determinação da Mesa, a
        requerimento da maioria dos Senadores.
        </ExpansionPanelDetails>
    </ExpansionPanel>
  </ExpansionPanelDetails>
</ExpansionPanel>
*/
/*
<ExpansionPanel>
  <ExpansionPanelSummary></ExpansionPanelSummary>
  <ExpansionPanelDetails></ExpansionPanelDetails>
</ExpansionPanel>
*/
export default Titulo
