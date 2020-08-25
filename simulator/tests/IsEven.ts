import {IsEven, Operand} from "../functions";
import {expect} from 'chai';

describe('IsEven', () => {
    it('should return that 2 is even', () => {
        var input: Operand = {
            operand: 2,
        }
        var expectedResult: Operand = {
            operand: 2,
            even: true,
        }
        var result = IsEven(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('should return that 1 is not even', () => {
        var input: Operand = {
            operand: 1,
        }
        var expectedResult: Operand = {
            operand: 1,
            even: false,
        }
        var result = IsEven(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('should return that 2.1 is not even', () => {
        var input: Operand = {
            operand: 2.1,
        }
        var expectedResult: Operand = {
            operand: 2.1,
            even: false,
        }
        var result = IsEven(input);
        expect(result).to.deep.equal(expectedResult);
    });
});

