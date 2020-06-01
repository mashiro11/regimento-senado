import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import { AppContext } from '../../AppContext'
import Enumeravel from '../Enumeravel'
import romanize from '../../romanize'

const GroupRenderer = ({groupName, unit, index, openState}) => {

  const { state, dispatch } = React.useContext(AppContext)
  const [open, setOpen] = React.useState(openState)

  const tryOpen = (unit) => {
    if(unit.artigos && unit.artigos[state.reference]){
        setOpen(true)
        return true
    }else if(unit.group){
      const shouldOpen = unit.group.map((u, index) => tryOpen(u))
                                   .reduce( (previous, entry) => entry || previous, false)
      setOpen(shouldOpen)
      return shouldOpen
    }
  }
  React.useEffect(() => {if(state.reference && state.reference !== '') tryOpen(unit) }, [state.reference, unit])
  return (
    <ExpansionPanel expanded={open} onClick={() => setOpen(!open)} style={index % 2 === 0 ? {backgroundColor: '#EEEEEE'} :{}}>
      <ExpansionPanelSummary>{groupName} {romanize(index + 1)} - {unit.name}</ExpansionPanelSummary>
      <ExpansionPanelDetails onClick={(event) => event.stopPropagation()}>
        <div>
          {unit.artigos ?
            <Enumeravel lista={unit.artigos} tipo='artigo' key={0}/>
            :null
          }
          {unit.group ?
            unit.group.map((u, i) =>
              <div key={i}>
                <GroupRenderer
                  groupName={unit.groupName} unit={u} key={i} index={i} openState={openState}
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
