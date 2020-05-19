import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import Artigo from '../Artigo'
import romanize from '../../romanize'

const GroupRenderer = ({groupName, unit, index}) => {
  const unitKey = Object.keys(unit)[0]
  if(unit[unitKey].artigos){
    console.log('artigos:', unit[unitKey].artigos)
  }
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary>{groupName} {romanize(index + 1)} - {unitKey}</ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          {unit[unitKey].artigos ?
            Object.keys(unit[unitKey].artigos).map((artigo, i) =>
              <ListItem key={i}>
                <Artigo artigo={unit[unitKey].artigos[artigo]} index={artigo}/>
              </ListItem>
            )
          :
          unit[unitKey].group?
            Object.keys(unit[unitKey].group).map((groupKey, i) =>
              <ListItem key={i}>
                <GroupRenderer
                  groupName={unit[unitKey].groupName} unit={{[groupKey]: unit[unitKey].group[groupKey]}} key={i} index={i}
                />
              </ListItem>
            )
            :null}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default GroupRenderer


/*
*/
