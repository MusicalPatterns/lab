import repeat from '../../src/utilities/repeat'

describe('repeat', () => {
    it('concats x copies of an array together', () => {
        expect(repeat([ 0, 1 ], 3)).toEqual([ 0, 1, 0, 1, 0, 1 ])
    })
})