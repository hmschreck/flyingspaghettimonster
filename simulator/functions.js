"use strict";
exports.__esModule = true;
exports.IsEven = exports.MultiplyByNegativeThree = exports.AbsoluteValue = exports.AddTwoNumbers = void 0;
function AddTwoNumbers(a, b) {
    var return_object = {
        operand: a + b
    };
    return return_object;
}
exports.AddTwoNumbers = AddTwoNumbers;
function AbsoluteValue(input) {
    var return_value = {
        operand: Math.abs(input.operand)
    };
    return return_value;
}
exports.AbsoluteValue = AbsoluteValue;
function MultiplyByNegativeThree(input) {
    var return_object = {
        operand: input.operand * -3
    };
    return return_object;
}
exports.MultiplyByNegativeThree = MultiplyByNegativeThree;
function IsEven(input) {
    var return_value = {
        operand: input.operand,
        even: input.operand % 2 == 0
    };
    return return_value;
}
exports.IsEven = IsEven;
