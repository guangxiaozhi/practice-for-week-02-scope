/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/
const plannedIntersect = firstArr => {
  let obj = {}
  for(let item of firstArr) {
    if(!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
  }
  return secondArr => {
    let ansArr = [];
    for(let item of secondArr) {
      if (obj[item]) {
        ansArr.push(item);
      }
    }
    return ansArr;
  }
}






// const plannedIntersect = (firstArr) => {
//   return (secondArr) => {
//     let newArray = [];
//     for (let i=0; i<firstArr.length; i++) {
//       let firstArrEl = firstArr[i];
//       for(let j=0; j<secondArr.length; j++) {
//         let secondArrEl = secondArr[j];
//         if(firstArrEl === secondArrEl) {
//           newArray.push(firstArrEl);
//         }
//       }
//     }
//     return newArray;
//   }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
