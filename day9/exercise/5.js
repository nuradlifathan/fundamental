// const toPhoneNumber = (numbers) => {
//   let output = "";
//   let numberTally = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     // Wrap first 3 numbers
//     switch (i) {
//       case 0:
//         output += `(${numbers[i]}`;
//         break;
//       case 1:
//         output += `${numbers[i]}`;
//         break;
//       case 2:
//         output += `${numbers[i]}) `;
//         break;
//     }

//     // Print the rest of the numbers
//     if (i > 2) {
//       output += `${numbers[i]}`;
//       numberTally++;
//     }

//     if (i !== numbers.length - 1 && numberTally === 4) {
//       output += "-";
//       numberTally = 0;
//     }
//   }

//   return output;
// };

// console.log(toPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]));
