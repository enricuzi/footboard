import { ComponentClass } from 'react'

export type ComponentRef = string | ComponentClass

export type Callback = (data: unknown) => void

export type MaybeNull<T> = T | null

export type MaybeUndefined<T> = T | undefined

export type MaybeExists<T> = T | null | undefined
