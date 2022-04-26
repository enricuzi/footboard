import { useLogger } from '../../utils'

interface PluginInterface {
  create: () => void
}

export abstract class BasePlugin implements PluginInterface {
  protected readonly log: (...logs: unknown[]) => void
  protected readonly error: (...logs: unknown[]) => void
  protected readonly name: string

  constructor(pluginName: string) {
    const { log, error } = useLogger(pluginName)
    this.log = log
    this.error = error
    this.name = pluginName
  }

  create() {
    this.error('No configuration found')
  }
}
