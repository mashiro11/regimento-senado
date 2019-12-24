import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import Artigo from '../Artigo'

import romanize from '../../romanize'

const Capitulo = ({nome, capitulo, index}) => {
  return(
      <ExpansionPanel>
        <ExpansionPanelSummary>Capítulo {romanize(index + 1)} - {nome}</ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {capitulo.artigos?
          <List>
            {Object.keys(capitulo.artigos).map((artigo, num) =>
              <ListItem key={num}>
                <Artigo artigo={capitulo.artigos[artigo]} index={num + 1}/>
              </ListItem>
            )}
          </List>
        :<div></div>}
        </ExpansionPanelDetails>
      </ExpansionPanel>
  )
}

export default Capitulo
