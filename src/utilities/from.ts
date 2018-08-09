// tslint:disable:variable-name no-any

import { Cents, Frequency, Index, Offset, Scalar, Semitones, Time } from './nominalTypes'

const Cents: (cents: Cents) => number =
    (cents: Cents): number => cents as any

const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number => frequency as any

const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number => semitones as any

const Scalar: (scalar: Scalar) => number =
    (scalar: Scalar): number => scalar as any

const Offset: (offset: Offset) => number =
    (offset: Offset): number => offset as any

const Time: (time: Time) => number =
    (time: Time): number => time as any

const Index: (index: Index) => number =
    (index: Index): number => index as any

export {
    Cents,
    Frequency,
    Semitones,
    Scalar,
    Offset,
    Time,
    Index,
}