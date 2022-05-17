import React from 'react'
import './field.component.css'
import { ZoneComponent } from '../zone/zone.component'
import { Field } from '../../../../types/type-defs'

export const FieldComponent = ({ zones }: Field) => {
  return <div className={'field'}>
    {
      zones.map((zone, i) => <ZoneComponent key={i} subZones={zone.subZones} type={zone.type}/>)
    }
  </div>
}
