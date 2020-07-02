let input = 0;
const numbers = [];
let total = 0;



while (input !== null) {
   input = prompt('Ведіть число');
   numbers.push(input);
};

const totalArray = function (array) {
   let temp = 0;
   for (let i = 0; i < array.length; i++) {

      if (isNaN(parseFloat(array[i])) === false) {
         temp += parseFloat(array[i]);
      }
   }
   return temp;
}


total = totalArray(numbers);
alert('Загальна сума ' + total);