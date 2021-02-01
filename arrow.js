const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give10 = () => 10;
const doMath = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    return result;
}

const result = give10();
const result2 = doMath(5, 3);
console.log(result2);