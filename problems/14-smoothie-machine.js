/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (cb, ...toppings) => {
  let sentence = "I'm having a smoothie with"
  return (...something) => {
    if(something.length > 1) {
      for(let i=0; i<something.length; i++) {
        sentence = `${sentence} and ${something[i]}`
      }
    } else {
      sentence = `${sentence} ${something[0]}`;
    }
    for(let i=0; i<toppings.length; i++) {
      sentence = `${sentence} and ${toppings[i]}`;
    }
    return sentence;
  }
}
// const smoothieMachine = (cb, ...topping) => {
//   let str = "I'm having a smoothie with"
//   let length = str.length;
//   return (...addThing) => {
//     let param = [...topping, ...addThing]
//     for (let item of param) {
//       if(str.length === length) {
//         str = str + " " + item;
//       }else {
//         str = str + " and " +item;
//        }

//     }
//     return str;
//   }
// }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
