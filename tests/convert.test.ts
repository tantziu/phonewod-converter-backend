import { expect} from 'chai'
import {cartesianProduct, convert, } from '../src/utils/convertUtil'
import 'mocha'

describe('convert()', () => {
    it('should return an array', () => {
        const result:string[] = convert('23')
        expect(result).to.be.an('array')
    })

    it('converts one digit', () => {
        const input = '2'
        expect(convert(input)).to.deep.equal(['a', 'b', 'c'])
    })

    it('converts two digits', () => {
        const input = '23'
        expect(convert(input)).to.deep.equal(['ad', 'ae', 'af','bd', 'be', 'bf','cd', 'ce', 'cf' ])
    })
})

describe('cartesianProduct()', () => {
    it('computes cartesian product', () => {
        const a:string[][] = [['a','b'], ['a', 'c']]
        const b = ['d']
        expect(cartesianProduct(a, b)).to.deep.equal([['a', 'b', 'd'], ['a','c', 'd']])
    })
})
