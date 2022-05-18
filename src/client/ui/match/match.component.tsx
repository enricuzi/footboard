import React from 'react'
import { FieldComponent } from './field/field.component'
import { Match } from '../../../types/type-defs'

export const MatchComponent = ({ field }: Match) => {
	return <div className={'match'}>
		<FieldComponent zones={field.zones}/>
	</div>
}
