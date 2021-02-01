const ages = [23, 24, 53, 56];
const ages2 = [73, 74, 73, 76];
const ages3 = [13, 14, 13, 16];
const fullAges = ages.concat(ages2).concat([8]).concat(ages3);
const fullAges2 = [...ages, ...ages2, 8, ...ages3];
console.log(fullAges2);