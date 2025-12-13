// // String Compression
// // Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

// // Only consecutive duplicates are compressed.
// // Words are separated by single spaces.
// // For example, given "yes yes yes please", return "yes(3) please".

// function compressString(sentence) {
//   console.log(sentence);
//   // split into array
//   const arr = sentence.split(' ');
//   //console.log(arr)
//   let counter = 0;
//   arr.forEach((x, i) => {
//     arr.forEach((p) => {
//       if (p === x) {
//         console.log('Match');
//       }
//       //console.log(p, x)
//     });
//     // console.log(x,i)
//   });
//   // {
//   // if (arr[i] === arr[i + 1]) {
//   //   counter++
//   //   console.log("Matching: ", arr[i], arr[i + 1])
//   // }
//   // }
//   console.log(counter);
//   return sentence;
// }

// compressString('route route route route route route tee tee tee tee tee tee');

// function compressString(sentence) {
// set a counter
//   let counter = 1;
//  console.log(sentence)
// turn into an arr
//  const arr = sentence.split(" ");
//  console.log(arr)
//  arr.forEach((x, i) => {
// looping through
//    console.log( x, i)
// if x is the same as the next item
//    if (x === arr[i + 1]) {
//      counter++
//      console.log("Match!")
//    }
//  })
//  console.log(counter)
// }

function compressString(sentence) {
  // split into array
  const arr = sentence.split(' ');
  // previous
  // result arr
  const result = [];

  // const counts = new Map(); dont need this!

  //for (const count of arr) {
  // let item = arr[0];
  // if (item !== count) {
  //   result.push(count)
  // }
  // console.log(count)
  // console.log(result)

  let previous = arr[0];
  let counter = 1;
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
    if (previous === arr[i]) {
      console.log('Matching');
      counter++;
    } else if (previous !== arr[i]) {
      result.push(`${previous}${counter > 1 ? `(${counter})` : ''}`);
      // if (counter > 1) {
      // result.push(`(${counter})`)
      // }
      counter = 1;
      previous = arr[i];
    }
  }
  result.push(`${previous}${counter > 1 ? `(${counter})` : ''}`);
  // if (counter > 1) {
  //   result.push(`(${counter})`)
  //}

  console.log(result.join(' '));
  return result.join(' ');
}

// compressString("yes yes yes please") should return "yes(3) please".
