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

function compressString(sentence) {
  // set a counter
  let counter = 0;
  console.log(sentence);
  // turn into an arr
  const arr = sentence.split(' ');
  console.log(arr);
  arr.forEach((x, i) => {
    // looping through
    console.log(x, i);
    // if x is the same as the next item
    if (x === arr[i + 1]) {
      counter++;
      console.log('Match!');
    }
  });
  console.log(counter);
}
