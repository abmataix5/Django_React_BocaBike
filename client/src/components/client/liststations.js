import React from 'react'
import Station from './station'

export default function ListStations ({bikes}) {
 /*    return 
      {
        bikes.map(({id, station, state}) =>
          <Station
            id={id}
            station={station}
            state={state}
          />
        )
      }
 */

      return(
          <Station/>
      )
  }