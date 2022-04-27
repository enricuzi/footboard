import { getComponentName } from './index'
import { ComponentRef } from '../type-defs'

export type Logger = {
	log: (...logs: Array<unknown>) => void,
	error: (...logs: Array<unknown>) => void
}

export const useLogger = (component: ComponentRef = '', ...props: Array<unknown>): Logger => {
	return {
		log: (...logs: Array<unknown>) => {
			LoggerUtils.log(getComponentName(component), ...props, ...logs)
		},
		error: (...logs: Array<unknown>) => {
			LoggerUtils.error(getComponentName(component), ...props, ...logs)
		}
	}
}

class LoggerUtils {
	static log (...logs: Array<unknown>) {
		console.log(...logs)
	}

	static error (...logs: Array<unknown>) {
		console.error(...logs)
	}
}
