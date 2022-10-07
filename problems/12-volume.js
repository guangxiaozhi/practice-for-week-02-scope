/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

const recVolume = (height) => {
    let rec = [height];
    return (num) => {
       let recV = 1;
       rec.push(num);
       if (rec.length < 3 ) {
       // console.log(recV)
        return () => {}
       }
       else if (rec.length === 3) {
         for(const el of rec) {
           recV *= el;
         }
         rec.push(recV)
         console.log(rec)
         return recV;
       } else {
        return rec[3];
       }
     }
}

let table1 = recVolume(5);
table1(4);
table1(3);
console.log(table1(3));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
