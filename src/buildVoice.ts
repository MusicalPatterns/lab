import context from './context'
import {BASE_GAIN, BASE_PITCH} from './constants'
import {NoteToPlay, StartNote, Voice} from './types'

const buildVoice: (type: OscillatorType) => Voice =
    (type: OscillatorType): Voice => {
        const oscillatorNode = context.createOscillator()

        const gainNode = context.createGain()
        gainNode.connect(context.destination)
        gainNode.gain.value = 0

        oscillatorNode.connect(gainNode)
        oscillatorNode.type = type
        oscillatorNode.start()

        const startNote: StartNote = ({pitch, gain}: NoteToPlay) => {
            oscillatorNode.frequency.value = pitch * BASE_PITCH
            gainNode.gain.value = gain * BASE_GAIN
        }

        const stopNote = () => gainNode.gain.value = 0

        return {
            startNote,
            stopNote,
        }
    }

export default buildVoice