
const findLongestWord = function (string) {
   let split = string.split(' ');
   let longStr = split[0];
   for (const strVal of split) {
      if (strVal.length > longStr.length) {
         longStr = strVal;
      }
   }
   let message = longStr;
   return message;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'