function add(num1, num2 = 30){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(45, 10);
console.log(total);