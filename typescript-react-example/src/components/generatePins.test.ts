import {GeneratePins} from './generatePins'

test("Generate one pin with four digits", () => {
    const result = GeneratePins(1)
    expect(result.length).toBe(1)
    expect(result[0].length).toBe(4)
})

test("Generate five pins", () => {
    const result = GeneratePins(5)
    expect(result.length).toBe(5)
})  