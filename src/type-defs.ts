import { ComponentClass } from 'react'

export type ComponentRef = string | ComponentClass

export type Callback = (data: unknown) => void

export type UiEvent = { component: string, callback: Callback }
