import { Contravariant1 } from './Contravariant.ts'
// import {} from './HKT.ts'

export interface Predicate<A> {
    (a: A): boolean
}

export const URI = 'Predicate'

export type URI = typeof URI

declare module './HKT.ts' {
  interface URItoKind<A> {
    readonly [URI]: Predicate<A>
  }
}

type Test = Contravariant1<URI>