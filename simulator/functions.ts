export interface Operand {
    operand: number;
    even?: boolean;
}

export function AddTwoNumbers(a: number, b: number): Operand {
    var return_object: Operand = {
        operand: a + b,
    }

    return return_object;
}

export function AbsoluteValue(input: Operand): Operand {
    var return_value: Operand = {
        operand: Math.abs(input.operand)
    }
    return return_value
}

export function MultiplyByNegativeThree(input: Operand): Operand {
    var return_object: Operand = {
        operand: input.operand * -3,
    }
    return return_object
}

export function IsEven(input: Operand): Operand {
    var return_value: Operand = {
        operand: input.operand,
        even: input.operand%2 == 0
    }
    return return_value
}