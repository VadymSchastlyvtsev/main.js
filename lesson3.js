// const subscription = 'pro';

// const canAccesContant = subscription === 'pro' || subscription === 'vip';

// console.log(`Есть доступ к контенту?`, canAccesContant)


//Branches

// // *? Дано рядок, що складається із символів, наприклад, 'abcde'.
//   *? Перевірте, що першим символом цього рядка є буква 'a'.
//   *? Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';
// const fail = 'ні';
// const tru = 'так';
// const message = prompt("Введіть першу букву даного рядка 'abcde'");
// const login = ''.includes('a');
// if(message === login) {
//     alert(tru);
// } else{
//     alert(fail)
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//     console.log(total)
//   }
//     // Change code above this line
//     return total;
//   }
//   calculateTotalPrice([12, 85, 37, 4]);
//   calculateTotalPrice([164, 48, 291]);
//   calculateTotalPrice([412, 371, 94, 63, 176]);
//   calculateTotalPrice();

// function findLongestWord(string) {
//     // Change code below this line
//   let array = string.split(" ");
//     let maxWord = string[0];
//     for (let i = 0; i < array.length; i += 1) {
//       if (array[i].length > maxWord.length) {
//         maxWord = array[i];
//       }
//     }
//   return maxWord;
  
//     // Change code above this line
//   }
  
//   findLongestWord("The quick brown fox jumped over the lazy dog");
//   findLongestWord("May the force be with you");
//   findLongestWord();

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     console.log(numbers);
//   }
//     // Change code above this line
//     return numbers;
//   }
//   createArrayOfNumbers(1, 3);
//   createArrayOfNumbers(14, 17);
//   createArrayOfNumbers(29, 34);
//   createArrayOfNumbers();
