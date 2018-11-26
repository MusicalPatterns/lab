import { Maybe, TypedMap } from '@musical-patterns/shared'
import { PatternId } from '../patterns'
import { PatternIdStateAction } from './patternId'
import { ImmutablePatternSpecState, PatternSpecStateAction } from './patternSpec'
import { ImmutablePerformerState } from './performer'

type Action = PatternIdStateAction |
    PatternSpecStateAction

enum RootStateKeys {
    PATTERN_ID = 'PATTERN_ID',
    PATTERN_SPEC = 'PATTERN_SPEC',
    PERFORMER = 'PERFORMER',
}

interface RootState {
    [ RootStateKeys.PATTERN_ID ]: Maybe<PatternId>,
    [ RootStateKeys.PATTERN_SPEC ]: ImmutablePatternSpecState,
    [ RootStateKeys.PERFORMER ]: ImmutablePerformerState,
}

type ImmutableRootState = TypedMap<RootStateValueTypes, RootState>

type RootStateValueTypes =
    ImmutablePatternSpecState |
    ImmutablePerformerState |
    Maybe<PatternId>

export {
    ImmutableRootState,
    RootStateKeys,
    Action,
}
