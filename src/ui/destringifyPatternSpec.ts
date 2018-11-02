import { PatternSpec } from '../../patterns'
import { to } from '../nominal'
import { StringifiedPatternSpec, StringifiedPatternSpecEntry } from '../state'

const patternSpecDefaults: PatternSpec = {
    patternDurationScalar: to.Scalar(1),
    patternPitchScalar: to.Scalar(1),
}

const destringifyPatternSpec: (displayedPatternSpec: StringifiedPatternSpec) => PatternSpec =
    (displayedPatternSpec: StringifiedPatternSpec): PatternSpec =>
        Object
            .entries(displayedPatternSpec)
            .reduce(
                (destringifiedPatternSpec: PatternSpec, [ key, val ]: StringifiedPatternSpecEntry): PatternSpec =>
                    ({ ...destringifiedPatternSpec, [key]: JSON.parse(val) }),
                patternSpecDefaults,
            )

export {
    destringifyPatternSpec,
}