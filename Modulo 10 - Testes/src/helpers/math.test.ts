import { plus, minus, multiply, divide } from "./Math"

describe('testing math function', () => {
    it('should add correctly', () => {
        let result = plus(5, 8)
        expect(result).toBe(13)
    })

    it('Should reduce correctly', () => {
        let result = minus(4,3)
        let result2 = minus(3, 4)
        let result3 = minus(3,3)
        expect(result).toBe(1)
        expect(result2).toBe(-1)
        expect(result3).toBe(0)
    })

    it('SHould multply correctly', () => {
        let result = multiply(3,5)
        expect(result).toBe(15)
    })

    it('Should divide correctly', () => {
        let result = divide(6, 2)
        expect(result).toBe(3)
    })
} )

export {}