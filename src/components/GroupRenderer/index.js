import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import { AppContext } from '../../App.js'
import Enumeravel from '../Enumeravel'
import romanize from '../../romanize'

const GroupRenderer = ({groupName, unit, index}) => {
  const context = React.useContext(AppContext)
  const unitKey = Object.keys(unit)[0]
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    if(unit[unitKey].artigos && unit[unitKey].artigos[context.reference])
        setOpen(true)
    }
  )
  return (
    <ExpansionPanel expanded={open} style={index % 2 === 0 ? {backgroundColor: '#EEEEEE'} :{}}>
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
