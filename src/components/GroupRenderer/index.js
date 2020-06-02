import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import { AppContext } from '../../AppContext'
import Enumeravel from '../Enumeravel'
import romanize from '../../romanize'

const GroupRenderer = ({onChange, groupName, unit, index, openState}) => {

  const { state, dispatch } = React.useContext(AppContext)
  const [open, setOpen] = React.useState(openState)

  const tryOpen = (unit) => {
    if(unit.artigos && unit.artigos[state.reference]){
        setOpen(true)
        onChange()
    }
    /*
    else if(unit.group){
      const shouldOpen = unit.group.map((u, index) => tryOpen(u))
                                   .reduce( (previous, entry) => entry || previous, false)
      setOpen(shouldOpen)
      return shouldOpen
    }*/
  }
  const onChildOpen = () => {
    setOpen(true)
    if(onChange) onChange()
    else{
      console.log('called on ', unit.name)
      setTimeout( () =>
      {
        const element = document.getElementById('art.' + state.reference)
        element.classList.add('blink')
        element.scrollIntoView(true)
      }
      , 1300)
    }
  }

  React.useEffect(() => {
    if(state.reference && state.reference !== '')
      tryOpen(unit)
  }, [state.reference, unit])
  return (
    <ExpansionPanel expanded={open} onClick={() => setOpen(!open)}
      style={index % 2 === 0 ? {backgroundColor: '#EEEEEE'} :{}}
      >
      <ExpansionPanelSummary>
        {groupName} {romanize(index + 1)} - {unit.name}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails onClick={(event) => event.stopPropagation()}>
        <div>
          {unit.artigos ?
            <Enumeravel lista={unit.artigos} tipo='artigo' key={0}/>
            :null
          }
          {unit.group ?
            unit.group.map((u, i) =>
              <div key={i}>
                <GroupRenderer onChange={onChildOpen} groupName={unit.groupName}
                  unit={u} key={i} index={i} openState={openState}
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
