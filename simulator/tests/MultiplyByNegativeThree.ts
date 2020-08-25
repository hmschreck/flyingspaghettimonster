import {MultiplyByNegativeThree, Operand} from "../functions";
import {expect} from 'chai';



describe('MultiplyByNegativeThree', () => {
    it('should return -33 when given 11', () => {
        var input: Operand = {
            operand: 11,
        }
        var expectedResult: Operand = {
            operand: -33
        }
        var result = MultiplyByNegativeThree(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('should return 21 when given -7', () => {
        var input: Operand = {
            operand: -7,
        }
        var expectedResult: Operand = {
            operand: 21
        }
        var result = MultiplyByNegativeThree(input);
        expect(result).to.deep.equal(expectedResult);
    });
})