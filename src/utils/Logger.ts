import { getComponentName } from './index'
import { ComponentRef } from '../type-defs'

export const useLogger = (component: ComponentRef = '', ...props: Array<unknown>) => {
	return {
		log: (...logs: Array<unknown>) => {
			Logger.log(getComponentName(component), ...props, ...logs)
		},
		error: (...logs: Array<unknown>) => {
			Logger.error(getComponentName(component), ...props, ...logs)
		}
	}
}

class Logger {
	static log (...logs: Array<unknown>) {
		console.log(...logs)
	}

	static error (...logs: Array<unknown>) {
		console.error(...logs)
	}
}
