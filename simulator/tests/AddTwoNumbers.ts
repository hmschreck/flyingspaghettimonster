import {AddTwoNumbers, Operand} from "../functions";
import { expect } from 'chai';

describe('AddTwoNumbers', () => {
    it('should add two numbers', () => {
        var result = AddTwoNumbers(5, 7);
        var expectedResult: Operand = {
            operand: 12,
        }
        expect(result).to.deep.equal(expectedResult);
    });
    it('should add a positive and negative number', () => {
        var result = AddTwoNumbers(5, -12);
        var expectedResult: Operand = {
            operand: -7,
        }
        expect(result).to.deep.equal(expectedResult);
    });
});