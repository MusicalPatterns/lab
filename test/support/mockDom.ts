// tslint:disable

declare const global: any

const mockOscillator: any = {
    connect: () => {
    },
    start: () => {
    },
}

const mockGain: any = {
    connect: () => {
    },
    gain: {},
}

const mockAudioContext: any = {
    createOscillator: () => mockOscillator,
    createGain: () => mockGain,
}

global.AudioContext = () => mockAudioContext

global.XMLHttpRequest = () => ({
    open: () => {
    },
    send: () => {
    },
})

global.self = { postMessage: () => {} }

global.requestAnimationFrame = () => {}