import {AbsoluteValue, Operand} from "../functions";
import {expect} from 'chai';

describe('AbsoluteValue', () => {
    it('should return the absolute value of 3', () => {
        var input: Operand = {
            operand: 3
        }
        var expectedResult: Operand = {
            operand: 3
        }
        var result = AbsoluteValue(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('should return the absolute value of -23', () => {
        var input: Operand = {
            operand: -23
        }
        var expectedResult: Operand = {
            operand: 23
        }
        var result = AbsoluteValue(input);
        expect(result).to.deep.equal(expectedResult);
    });
});