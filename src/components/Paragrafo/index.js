import React from 'react'
import romanize from '../../romanize'
const Paragrafo = ({paragrafo, unico, index}) => {
  return(
    <div>
      {unico? 'Parágrafo único. ' : '§ '+index+'º '}
      {paragrafo.caput}
      {paragrafo.inciso?
        <div>
          {Object.keys(paragrafo.inciso).map((enumeravel, i)=>
            <div key={i}>{romanize(enumeravel)} - {paragrafo.inciso[enumeravel].caput}</div>
          )}
        </div>
        :null
      }
    </div>
  )
}

export default Paragrafo
