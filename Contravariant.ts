import { URIS } from './HKT.ts'

export interface Contravariant1<F extends URIS> {
    readonly URI: F
}