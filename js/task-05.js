const checkForSpam = function (message) {
   let onOff = false;
   message = message.toLowerCase();
   console.log(message);
   if (message.match('sale') || message.match('spam')) {
      onOff = true;

   }
   // message = message.toUpperCase();
   // console.log(message)
   return onOff;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
