import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import Artigo from '../Artigo'

const Citacao = ({citacao}) => {
  return(
    <ExpansionPanel>
      <ExpansionPanelSummary>Citação - {citacao.fonte}</ExpansionPanelSummary>
      <ExpansionPanelDetails>
      <List>
      {Object.keys(citacao.artigos).map( artigo =>
        <ListItem key={artigo}>
          <Artigo artigo={citacao.artigos[artigo]} index={artigo} />
        </ListItem>
      )}
      </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Citacao
