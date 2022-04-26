import { useLogger } from '../utils'
import { getComponentName } from './index'
import { Callback, ComponentRef, UiEvent } from '../type-defs'

export const EVENTS = {
}

export const useEvents = (component: ComponentRef) => {
	return {
		EVENTS,
		on: (eventType: string, callback: Callback) => EventManager.on(eventType, callback, component),
		once: (eventType: string, callback: Callback) => EventManager.once(eventType, callback, component),
		trigger: (eventType: string, data: unknown) => EventManager.trigger(eventType, data, component),
		onAll: (eventTypes: Array<string>, callback: Callback) => EventManager.onAll(eventTypes, callback, component),
		onceAll: (eventTypes: Array<string>, callback: Callback) => EventManager.onceAll(eventTypes, callback, component),
		triggerAll: (eventTypes: Array<string>, data: unknown) => EventManager.triggerAll(eventTypes, data, component),
		off: (eventType: string) => EventManager.off(eventType, component)
	}
}

class EventManager {
  static events: Record<string, Array<UiEvent>> = {}

  static on (eventType: string, callback: Callback, component: ComponentRef) {
  	if (!this.events[eventType]) {
  		this.events[eventType] = []
  	}
  	if (this.events[eventType].some((event) => event.component === getComponentName(component))) {
  		return useLogger(component).error('Already registered same event', eventType)
  	}
  	this.events[eventType].push({
  		component: getComponentName(component),
  		callback
  	})
  	useLogger(component).log('Added event listener', eventType, { ...this.events })
  }

  static onAll (eventTypes: Array<string>, callback: Callback, component: ComponentRef) {
  	let count = 0
  	let mergedData = {}
  	eventTypes.forEach((eventType) => {
  		this.on(eventType, (data) => {
  			mergedData = { ...mergedData, ...(data as Record<string, unknown>) }
  			if (++count === eventTypes.length) {
  				callback(mergedData)
  			}
  		}, component)
  	})
  }

  static once (eventType: string, callback: Callback, component: ComponentRef) {
  	EventManager.on(eventType, handleEventOnce, component)

  	function handleEventOnce (data: unknown) {
  		callback(data)
  		EventManager.off(eventType, component)
  	}
  }

  static onceAll (eventTypes: Array<string>, callback: Callback, component: ComponentRef) {
  	EventManager.onAll(eventTypes, handleEventOnce, component)

  	function handleEventOnce (data: unknown) {
  		callback(data)
  		eventTypes.forEach((eventType) => EventManager.off(eventType, component))
  	}
  }

  static off (eventType: string, component: ComponentRef) {
  	if (this.events[eventType]) {
  		this.events[eventType] = this.events[eventType].filter((event) => event.component !== getComponentName(component))
  		useLogger(component).log('Removed event listener', eventType, { ...this.events })
  	}
  }

  static trigger (eventType: string, data: unknown, component: ComponentRef) {
  	useLogger(component).log(`firing event ${eventType}`, data)
  	this.events[eventType] && this.events[eventType].forEach((event) => event.callback(data))
  }

  static triggerAll (eventTypes: Array<string>, data: unknown, component: ComponentRef) {
  	useLogger(component).log(`firing event ${eventTypes}`, data)
  	eventTypes.forEach((eventType) => {
  		this.events[eventType] && this.events[eventType].forEach((event) => event.callback(data))
  	})
  }
}
