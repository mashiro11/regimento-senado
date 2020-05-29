import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import Enumeravel from '../Enumeravel'
import romanize from '../../romanize'

const GroupRenderer = ({groupName, unit, index}) => {
  const unitKey = Object.keys(unit)[0]
  return (
    <ExpansionPanel style={index % 2 === 0 ? {backgroundColor: '#EEEEEE'} :{}}>
      <ExpansionPanelSummary>{groupName} {romanize(index + 1)} - {unitKey}</ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          {unit[unitKey].artigos ?
            <Enumeravel lista={unit[unitKey].artigos} tipo='artigo' key={0}/>
          :unit[unitKey].group ?
            Object.keys(unit[unitKey].group).map((groupKey, i) =>
              <div key={i}>
                <GroupRenderer
                  groupName={unit[unitKey].groupName} unit={{[groupKey]: unit[unitKey].group[groupKey]}} key={i} index={i}
                />
              </div>
            )
          :null}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default GroupRenderer
